import React,{useState,useEffect} from "react";

function MyComponent2(){

    const [width,setWidth]=useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)


    useEffect(()=>{
        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize",handleResize);
        }

    },[])

    useEffect(()=>{
        document.title=`Dimensions: ${height}X${width}`
    },[height,width])

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }


    return(
        <>
            <p>Height: {height}px</p>
            <p>Width: {width}px</p>
        </>
    );
}

export default MyComponent2