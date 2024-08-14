import React from 'react';
import UserProfile from './UserProfile';
import { UserProvider } from './UserContext';


//Add context to userprofile
const App: React.FC = () => {
    return (
			<UserProvider>
        <UserProfile />
			</UserProvider>
    );
};

export default App;