import { useEffect, useState } from "react";
import MainContentTwo from "./MainContentTwo";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './MainContent.css'

function MainContent(){
    const main = "Main landing"
    // const fileInfo = {type: "txt", content: "confodential"}
      const fileInfo = null
      const [used, setUsed] = useState('red');
      const [count, setCount] = useState(0);
      // const[user, setUser] = useState("");
      const [inputvalue, setInputvalue] = useState({});
      // console.log(user);

      useEffect(() =>{ console.log("count rendered")
        // if(count < 10){
        //   setCount(1);
        // }
      //   setTimeout(() => {
      //     return setCount((previousCount) => previousCount +1)
      //   }, 1000)
      },[]);

      function increaseCount(){
        setCount((previousCount) => {
          return previousCount+1;
        })
      }

      function handleSubmit(e){
        e.preventDefault();
        console.log("formSubmitted", inputvalue);
      }

      function handleresult(e){
        const name =e.target.name;
        const value = e.target.value;
        setInputvalue((prevoiusState) => {return {...prevoiusState, [name]: value}});
      }

    return(
        <>
        <h1>This is smaple {main} page</h1>
        {fileInfo !== undefined && fileInfo !== null ?  <MainContentTwo fileInfo = {fileInfo}/> : null}
        <h1>The given input count is {count}</h1>
        <h1> The intial color is {used}</h1>
        <button onClick = {() => {setUsed('blue')
        }}> click</button>

        <button onClick={increaseCount}>increase Count</button>
        {/* <form onSubmit={handleSubmit}> */}
        {/* <label >Enter your name: <input type="text" placeholder="Enter the Username" onChange={(e) => setInputvalue((preiousState) => {return {...preiousState, name:e.target.value}})}/></label>
        <label >Enter your name: <input type="text" placeholder="Enter the password" onChange={(e) => setInputvalue((preiousState) => {return {...preiousState, password:e.target.value}})}/></label> */}
        {/* <label >Enter your name: <input type="text" placeholder="Enter the Username" name= "name" onChange={handleresult}/></label>
        <label >Enter your name: <input type="text" placeholder="Enter the password" name= "password" onChange={handleresult}/></label>
        <input type="submit" value={"submit here"}/> 
        </form> */}
        <div class="container d-flex justify-content-center align-items-center min-vh-100">
            <div class="card p-4">
          <form class="row g-3" onSubmit={handleSubmit}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" name="email" onChange={handleresult}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" name= "password" onChange={handleresult}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={handleresult}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" onChange={handleresult}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" name="city" onChange={handleresult}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" name="zip" onChange={handleresult}/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
</div>
        </>
    );
}

export default MainContent;