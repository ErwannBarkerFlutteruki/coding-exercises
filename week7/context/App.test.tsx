import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { useUser } from './UserContext';

describe('UserContext and UserProfile within App', () => {
    test('displays logged-out state and handles login', () => {
        render(<App />);

        // Verify initial state is logged out
        expect(screen.getByText(/No user logged in./i)).toBeInTheDocument();
        expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();

        // Simulate login
        fireEvent.click(screen.getByText(/Login/i));
        expect(screen.getByText(/Welcome, John Doe!/i)).toBeInTheDocument();
        expect(screen.getByText(/Email: john.doe@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    });

    test('handles logout', () => {
        render(<App />);

        // Simulate login
        fireEvent.click(screen.getByText(/Login/i));

        // Verify logged-in state
        expect(screen.getByText(/Welcome, John Doe!/i)).toBeInTheDocument();

        // Simulate logout
        fireEvent.click(screen.getByText(/Logout/i));
        expect(screen.getByText(/No user logged in./i)).toBeInTheDocument();
        expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
    });

    test('throws error if useUser is used outside UserProvider', () => {
        // Suppress console error output for this test case
        const consoleError = console.error;
        console.error = jest.fn();

        const TestComponent = () => {
            try {
                useUser();
            } catch (e) {
                return <p>{(e as Error).message}</p>;
            }
            return null;
        };

        render(<TestComponent />);
        expect(screen.getByText(/useUser must be used within a UserProvider/i)).toBeInTheDocument();

        // Restore console error output
        console.error = consoleError;
    });
});