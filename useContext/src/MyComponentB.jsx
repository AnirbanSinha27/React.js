import MyComponentC from "./MyComponentC";

function MyComponentB(){
    return(
        <div className="component-a">
            <h1>Component B</h1>
            <MyComponentC></MyComponentC>
        </div>
    );
}

export default MyComponentB