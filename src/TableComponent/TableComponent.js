import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function TableComponent(){

    const[users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const[submitValue, setSubmitValue] = useState({});

    useEffect(() => {
       const res = fetch("https://dummyjson.com/users")
        .then((resp) => resp.json()).then((e) => setUsers(e.users))
        .then((e) => console.log(e));
    },[])


    useEffect(() => {
        postData(submitValue);
    },[submitValue]);

    function postData(e){
        fetch("https://dummyjson.com/users/add",{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(e)   
        }).then((res) => res.json())
    
    }


    function editData(){
        setShow(true);
    }

    function handleSubmit(e){
        e.preventDefault();
        const re = new FormData(e.target);
        const obj = Object.fromEntries(re.entries());
        setSubmitValue(obj);
        setShow(false);

    }
    return(

        <>
        <h1>User Details </h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" onClick={editData}>Edit</button>
  <button type="button" class="btn btn-primary">Delete</button>
</div></td>
                    </tr>
                )}
            </tbody>
        </table>
        {show && (

            <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Add User</h5>
                  <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>
                <div className="modal-body">
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  />
                  <input
                    className="form-control mb-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        )}
        </>
    );
}

export default TableComponent;