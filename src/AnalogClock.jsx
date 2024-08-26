import React,{useState,useEffect} from 'react'


function AnalogClock() {

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);
    

    return () => clearInterval(intervalId);

    },[]);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="clock">
    <div
      className="hand hour-hand"
      style={{ transform: `rotate(${hourDegrees}deg)` }}
    />
    <div
      className="hand minute-hand"
      style={{ transform: `rotate(${minuteDegrees}deg)` }}
    />
    <div
      className="hand second-hand"
      style={{ transform: `rotate(${secondDegrees}deg)` }}
    />
    <div className="center" />
  </div>
);
  
}

export default AnalogClock