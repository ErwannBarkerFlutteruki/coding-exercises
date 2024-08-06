import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactHooks from './reactHooks';

describe('Counter Component', () => {
    test('initial render', () => {
        render(<ReactHooks />);
        expect(screen.getAllByText(/Count: 0/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/Double Count: 0/i)).toBeInTheDocument();
    });

    test('increments count and updates double count', () => {
        render(<ReactHooks />);

        fireEvent.click(screen.getByText(/Increment/i));
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Double Count: 2/i)).toBeInTheDocument();

        fireEvent.click(screen.getByText(/Increment/i));
        expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Double Count: 4/i)).toBeInTheDocument();
    });

    test('decrements count and updates double count', () => {
        render(<ReactHooks />);

        fireEvent.click(screen.getByText(/Decrement/i));
        expect(screen.getByText(/Count: -1/)).toBeInTheDocument();
        expect(screen.getByText(/Double Count: -2/i)).toBeInTheDocument();

        fireEvent.click(screen.getByText(/Decrement/i));
        expect(screen.getByText(/Count: -2/i)).toBeInTheDocument();
        expect(screen.getByText(/Double Count: -4/i)).toBeInTheDocument();
    });
});