// components/UserMenu.jsx
import React from 'react';

const UserMenu = ({ user, onLogout }) => {
  return (
    <div>
      <p>{user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;

