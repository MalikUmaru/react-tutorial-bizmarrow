import React from "react";

const UserList = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user) => (
          <li>
            key={user.id}
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList; 
