function Button(){
    let count=0;
    const handleClick=(name)=>{
        
        if(count<3){
            count++;
            console.log(`${name}, you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name}, stop clicking me`);
        }
    };

    const handleClick2=(e)=>{
        e.target.textContent="OUCH!";
    }


    return(
        <>
            <button onClick={()=>handleClick("Anirban")}>Click Me</button>
            <button onDoubleClick={(e)=>handleClick2(e)}>Click Me 2</button>
        </>
    )
}

export default Button