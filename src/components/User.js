// User.js
import React from "react";

function User({ user }) {
  return (
    <div className="user-card">
      <div className="user-image">
        <img src={user.img} alt={`${user.first_name} ${user.last_name}`} />
      </div>
      <div className="user-info">
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default User;
