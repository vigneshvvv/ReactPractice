function About(props){
    const {objc} = props
    const {type, Action} = objc;
    // console.log("name", namet)
    return(
        <h1>This is {type} page with {Action}</h1>
    );
}
export default About;