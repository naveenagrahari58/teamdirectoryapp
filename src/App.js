import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
      .then((response) => response.json())
      .then((data) => {
        console.log("user:", data);
        setUsers(data);
        setMembers(data.filter((user) => user.role === "member"));
        setAdmins(data.filter((user) => user.role === "admin"));
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="App">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="content">
        <h2 className="user-roll">Administrator</h2>
        <div className="user-group">
          {admins.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
        <h2 className="user-roll">Members</h2>
        <div className="user-group col-sm">
          {members.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
      <button className="add-button">
        <span class="icon">+</span>
      </button>
    </div>
  );
}

export default App;
