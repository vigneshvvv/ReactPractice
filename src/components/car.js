function Car(props){
    // const {brand} = props;
    // const {color} = props;
    const {carInfo} = props;
    const {type, cylinder} = carInfo

    const car = "Ford"
    const text = `Hi I am ${type} car with ${cylinder} color`;
    return(
        <h2>{text}</h2>
    )
}

export default Car;