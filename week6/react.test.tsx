import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Greeting, RenderChildren, RenderList } from './react';

// test('displays the correct greeting message', () => {
//     render(<Greeting name="John" />);

//     const greetingElement = screen.getByText(/Hello, John!/i);
//     expect(greetingElement).toBeInTheDocument();
// });


// test('displays the correct children', () => {
//     const children = <>someHtlm</>;
//     render(<RenderChildren children={children} />);

//     const renderChildrenElement = screen.getByText(/someHtlm/i);
//     expect(renderChildrenElement).toBeInTheDocument();
// });

test('renders a list of items', () => {
    const  items = [

        {
            name: 'first item',
            isActive: false
        },
        {
            name: 'visible item',
            isActive: true
        },
        {
            name: 'another visible item',
            isActive: true
        }
    ];
    const { getAllByRole } = render(<RenderList items={items} />);
    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(items.length);

    // I use a `forEach` to make the test dynamic in case we decide
    // to generate items dynamically in the future
    // This method is also implicitly testing the order
    listItems.forEach((item, index) => {
        // You can import wihthin from @testing-library/react
        const { getByText, queryByText } = within(item)
        const { name, isActive } = items[index]
        expect(getByText(name, { exact: false })).toBeInTheDocument()

        isActive
            ? expect(getByText('isActive', { exact: false })).toBeInTheDocument()
            : expect(queryByText('isActive')).not.toBeInTheDocument()
    })
});