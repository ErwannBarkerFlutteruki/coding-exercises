import React from 'react';
import { useUser } from './UserContext';

const UserProfile: React.FC = () => {
    const { user, login, logout } = useUser();

    const handleLogin = () => {
        login({ name: 'John Doe', email: 'john.doe@example.com' });
    };

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.name}!</p>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>No user logged in.</p>
                    <button onClick={handleLogin}>Login</button>
                </>
            )}
        </div>
    );
};

export default UserProfile;