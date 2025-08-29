import { useEffect, useState } from "react";

function UseEffect(){
    const[num, setNum] = useState(0);
    const[userName, setUserName] = useState("");
     const[lastName, setLastName] = useState("");
      const[address, setAddress] = useState("");
      const[obj, setObj] = useState({});
    // console.log(userName);

    useEffect(() => {console.log("The Increment function is working")
        if(num>12){
            setNum(0);
        }

    },[num]);
    function incrementNumber(){
        setNum((previousState) => {
            return previousState +1;
        })

    }

    function submitHandling(e){
        e.preventDefault();
        // console.log(obj);
        // const formNew = new FormData(e.target);
        // const valu= Object.fromEntries(formNew.entries());
        // setObj(valu);
        // console.log(valu);
        const formdata = new FormData(e.target);
        const dt = Object.fromEntries(formdata.entries());
        setObj(dt);
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
        }).then((response) => response.json()).then((json) => console.log(json))
        // console.log(userName, lastName, address);
        console.log(dt);

    }
    function handlingSubmit(e){
        // const nm = e.target.name;
        // const val = e.target.value;
        // setObj((previousState) => {
        //     return{...previousState, [nm]:val
        //     }
        // }) 
        
    }
    function settingObject(e){
        const nmt = e.target.name;
        const result = e.target.value;
        setObj((previousState) => {return {...previousState, [nmt]: result}});
        console.log(obj);
    }
    return(
        <>
        <h1>The increment number is {num} </h1>
        <button onClick={incrementNumber}>Increment</button>
        <form onSubmit={submitHandling}>
               <label> Enter your name:<input type="text" placeholder="Enter your name" name="userName" 
            /></label>
            <label> Enter your Last Name:<input type="text" placeholder="Enter your name" name="LastName" 
            /></label>
            <label>Enter your Address:<input type="text" placeholder="Enter your name" name="Address"
            /></label>
            {/* <label> Enter your name:<input type="text" placeholder="Enter your name" name="userName" onChange={(e) => setObj((previousState) => {
                return {...previousState, name:e.target.value}
            })}/></label>
            <label> Enter your Last Name:<input type="text" placeholder="Enter your name" onChange={(e) => setObj((previousState) => {
                return{...previousState, lastName:e.target.value}
            })}/></label>
            <label>Enter your Address:<input type="text" placeholder="Enter your name" onChange={(e) => setObj((previousState) => {
                return {...previousState, address:e.target.value}
            })}/></label> */}
              {/* <label> Enter your name:<input type="text" placeholder="Enter your name" name="userName" 
            /></label>
            <label> Enter your Last Name:<input type="text" placeholder="Enter your name" name="LastName" 
            /></label>
            <label>Enter your Address:<input type="text" placeholder="Enter your name" name="Address" 
            /></label> */}
            <button type="submit">submit</button>
        </form>
        </>
    );

}

export default UseEffect;