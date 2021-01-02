import React from "react";
import "./user.css";
import axios from "axios";

function ComponentsUser(props) {
    const [users, setUsers] = React.useState('No users found')
    React.useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then((response) => {
            const usersApi = response.data;
            setUsers(usersApi);
        });
    });

    function getMapList() {
        return users.map( user => {
            return <li key ={user.id}>
                {user.id} - {user.name}
            </li>
        })
    }
    return (
        <div className="sonho">
            <ul>
                {getMapList()} 
            </ul>
        </div>
    );
}

export default ComponentsUser;
