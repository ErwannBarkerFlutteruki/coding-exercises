import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the user context state
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
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider component's props
interface UserProviderProps {
	children: ReactNode;
}


// UserProvider component
// this will need a state hook to store the user
// A login function will need creating that sets the user to a passed user object
// a logout function will be needed to set the user to null.
// return the new context, with the values of user, login and logout
// make sure that children is still being used in the return.
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

	const [user, setUser] = useState(null);
	const login = (user: User) => setUser(user);
	const logout = () => setUser(null);

	return (
		<UserContext.Provider value={{user, login, logout}}> 
			{children} 
		</UserContext.Provider>
	)
};

// Create a hook that returns a created context,
//throws an error 'useUser must be used within a UserProvider' if no context is defined.
// Custom hook for using the UserContext
export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider")
	} 
	return context;
};

