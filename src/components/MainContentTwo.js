function MainContentTwo(props){

    const {fileInfo} = props
    const {type, content} = fileInfo;
    return(
        <h1> The values are being sent via props with content {type} with {content}</h1>
    );
}
export default MainContentTwo;