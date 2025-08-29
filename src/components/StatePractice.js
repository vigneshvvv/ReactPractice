import { useEffect, useState } from "react";
import './MainContent.css'

function StatePractice(){
    const [data, setData] = useState(0);

    useEffect(() => {console.log("rendered");
        // if(data> 15){
            console.log("the value",data);
            setData(1);
        // }
    },[data]);

    function incrementnumber(){
        setData((previousState) =>  { return previousState +1} );
    }
    return(
        <>
        <h1> This is to test state function {data} </h1>
        <button onClick={incrementnumber}>Increment</button>
        </>
    );
}

export default StatePractice