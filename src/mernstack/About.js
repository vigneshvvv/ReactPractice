import Careers from "./Careers";

function About(){
    const sample = "our work";
    const sample1 = {"name" : "vignesh", "age": "28"};
     return(
        <>
        <h1>About {sample}</h1>
        <p>We are learning Mern stac Development</p>
        <Careers sample1={sample1} />
        </>
     );
}

export default About;