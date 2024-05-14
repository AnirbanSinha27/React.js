import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[])

    function formatTime(){
        let hrs=time.getHours();
        const mins=time.getMinutes();
        const secs=time.getSeconds();
        const meridiem=hrs>=12?"PM":"AM";

        hrs=hrs%12||12;

        return `${String(hrs).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")} ${meridiem}`;

    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock