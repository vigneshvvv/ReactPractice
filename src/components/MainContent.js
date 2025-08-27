import MainContentTwo from "./MainContentTwo";

function MainContent(){
    const main = "Main landing"
    // const fileInfo = {type: "txt", content: "confodential"}
      const fileInfo = null
    return(
        <>
        <h1>This is smaple {main} page</h1>
        {fileInfo != undefined && fileInfo != null ?  <MainContentTwo fileInfo = {fileInfo}/> : null}
       
        </>
    );
}

export default MainContent;