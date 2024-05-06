import React,{useState,useRef,useEffect} from "react";


function MyComponent(){

    const userRef=useRef(null);

    useEffect(()=>{
        console.log("Component Rendered");
    })

    function handleClick(){
        userRef.current.focus();
        userRef.current.style.backgroundColor="red";
    }

    return(
        <>
            <button onClick={handleClick}>Click Me</button>
            <input type="text" ref={userRef}/>
        </>
    );
}

export default MyComponent;


