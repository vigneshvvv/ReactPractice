function Careers(props){
    const {sample1} = props;
    const {name, age} = sample1;

    return(
        <>
        <h1>Click to view open positions</h1>
        <h1>{name}</h1>
        </>
    );
}

export default Careers;