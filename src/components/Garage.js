import { useEffect, useState } from "react";
import Car from "./car";
import 'bootstrap/dist/css/bootstrap.min.css';

function Garage(){
    const brand = 'testing';
    const color = 'black';
    const carInfo = {type: "Racer", cylinder: "v6"}
    //  const carInfo = {};
    const carstatus = carInfo.type !== undefined && carInfo.cylinder !== undefined

   const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then( response => response.json())
        .then (e => setUsers(e))
    }, [])
   
    return(
        <>
        <h1>what happened</h1>
        {/* <Car brand={brand} color={color}/> */}
        {/* {carInfo.type !== undefined && carInfo.cylinder !== undefined ? <Car carInfo={carInfo}/>:null} */}
        {carstatus ? <Car carInfo = {carInfo}/> : null}
        {/* <table> */}
        <table class="table table-striped">
            <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>userName</th>
            <th>email</th>
            <th>phone</th>
            <th>phone</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => 
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
            </tr>
        )}
        </tbody>
        </table>
        </>
    )
}

export default Garage;