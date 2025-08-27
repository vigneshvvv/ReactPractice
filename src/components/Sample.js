import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Sample(props){

    const {cont} = props;
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then( e => setUsers(e))
}, [])

    return(
        <>
        <table class="table table-striped">
        {/* <table> */}
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody>
              {users.map(user => 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>
              )}

            </tbody>
        </table>
        </>
    );
}

export default Sample;


