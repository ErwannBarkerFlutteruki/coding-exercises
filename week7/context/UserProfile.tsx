import React from 'react';

const UserProfile: React.FC = () => {
    //get the user, login and logout from the context and store it as a variable

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