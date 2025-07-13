import React from "react";

const LearnLists = () => {
  const users = [
    { id: 1, firstName: "John", lastName: "Henry", level: 300 },
    { id: 2, firstName: "Harry", lastName: "Robert", level: 300 },
    { id: 3, firstName: "George", lastName: "Benson", level: 300 },
    { id: 4, firstName: "Kingsley", lastName: "Henry", level: 300 },
    { id: 5, firstName: "Sly", lastName: "Henry", level: 300 },
    { id: 6, firstName: "Warder", lastName: "Henry", level: 300 },
    { id: 7, firstName: "Smith", lastName: "Henry", level: 300 },
    { id: 8, firstName: "Due", lastName: "Henry", level: 300 },
    { id: 9, firstName: "Tsakamoto", lastName: "Henry", level: 300 },
    { id: 10, firstName: "Kane", lastName: "Henry", level: 300 },
  ];
return (
    users.map(user =>(
        <ul>
            <li key={user.id}>
                <h1>{user.firstName}, <span>{user.lastName},Level-{user.level}</span></h1>

            </li>
        </ul>
    ))
)

};

export default LearnLists;
