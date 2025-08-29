import About from "./About";

function Introduction(){
    const namet = "Sample";
    // const objc = {type: "Guess", Action: "Done"}
      const objc = null;
    return(
        <>
        <h1>Home Page</h1>
        {/* <h1>This is {obj.type} page and action was {obj.Action}</h1> */}
        {objc !== undefined && objc !== null ? <About objc= {objc}/> : null}
        </>
    );
}

export default Introduction;