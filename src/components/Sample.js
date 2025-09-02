import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Sample(props){

    const {cont} = props;
const [users, setUsers] = useState([]);
const [show,  setShow] = useState(false);
const [froms, setForms] = useState({});

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
//     .then( e => setUsers(e))
// }, [])
  useEffect(() => {
    fetch("https://dummyjson.com/users").then(response => response.json()).then(e => setUsers(e.users)
    ).then(e => console.log(users))
  }, [])

    useEffect(() => {
    // if(Object.keys(froms).length > 0){
        PostData(froms);
    // }
  },[froms]);

  function PostData(e){
    console.log(froms);
    fetch("https://dummyjson.com/users/add",{
        method: "POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(froms)
    }).then((res) => res.json()).then((e) => console.log(e));
  }

  function deleteUser(id){
    console.log("The id going to delete is", id);
    fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE"
    }).then((re) => re.json()).then((e) => console.log("Returned json is"+ e))
  }

  function handleSubmit(e){
    e.preventDefault();
    let data = new FormData(e.target);
    let formd = Object.fromEntries(data.entries());
    setForms(formd);
    setShow(false);
  }

    return(
        <>
        <table class="table table-striped">
        {/* <table> */}
            <thead>
                <tr>
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {users.map(user => 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" onClick={() => setShow(true)}>Add</button>
  <button type="button" class="btn btn-primary" onClick={() => deleteUser(user.id)}>Delete</button></div></td>
                </tr>
              )}

            </tbody>
        </table>
        { show && (
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

export default Sample;


