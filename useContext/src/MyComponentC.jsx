import MyComponentD from "./MyComponentD";

function MyComponentC(){
    return(
        <div className="component-a">
            <h1>Component C</h1>
            <MyComponentD></MyComponentD>
        </div>
    );
}

export default MyComponentC