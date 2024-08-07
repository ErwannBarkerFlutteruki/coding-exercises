import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

// Create the context with default value

// Define the provider component's props
interface UserProviderProps {
}


// UserProvider component
// this will need a state hook to store the user
// A login function will need creating that sets the user to a passed user object
// a logout function will be needed to set the user to null.
// return the new context, with the values of user, login and logout
// make sure that children is still being used in the return.
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
};

// Create a hook that returns a created context,
//throws an error 'useUser must be used within a UserProvider' if no context is defined.
// Custom hook for using the UserContext
export const useUser = (): UserContextType => {

};