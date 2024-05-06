import React,{useState} from "react"

function MyComponent(){

    const [count,setCount]=useState(0);

    const incrementCount=(e)=>{
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }

    const decrementCount=(e)=>{
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }

    const resetCount=(e)=>{
        setCount(0);
    }

    return(
        <>
            <div>
                Count: {count}
            </div>
            <button value={count} onClick={decrementCount}>Decrement</button>
            <button value={count} onClick={resetCount}>Reset</button>
            <button value={count} onClick={incrementCount}>Increment</button>
        </>
    );
}

export default MyComponent