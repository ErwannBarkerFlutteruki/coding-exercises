import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

const App: React.FC = () => {
    return (
        <UserProvider>
            <UserProfile />
        </UserProvider>
    );
};

export default App;