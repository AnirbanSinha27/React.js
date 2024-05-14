import React,{useEffect,useState,useRef} from "react";

function Stopwatch(){

    const [isRunning,setIsRunning]=useState(false);
    const[elapsedTime,setElapsedTime]=useState(0);
    const intervalRef=useRef(null);
    const startTimeRef=useRef(0);

useEffect(() => {
    if (isRunning) {
        intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);
    } else {
        clearInterval(intervalRef.current);
    }

    return () => {
        clearInterval(intervalRef.current);
    };
}, [isRunning]);
    
    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
    }
    
    function stop(){
        setIsRunning(false);
    }
    
    function reset(){
        setElapsedTime(0)
        setIsRunning(false);
    }

    function formatTime(){

        let hours=Math.floor(elapsedTime/(1000*60*60));
        let minutes=Math.floor(elapsedTime/(1000*60));
        let seconds=Math.floor(elapsedTime/(1000)%60);
        let miliseconds=Math.floor(elapsedTime%1000/10);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        miliseconds = miliseconds.toString().padStart(2, '0');

        return `${minutes}:${seconds}:${miliseconds}`;
    }

    return(
        <>
            <div className="stopwatch">
                <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button onClick={start} className="start-button">Start</button>
                    <button onClick={stop} className="stop-button">Stop</button>
                    <button onClick={reset} className="reset-button">Reset</button>
                </div>
            </div>
        </>
    );
}

export default Stopwatch