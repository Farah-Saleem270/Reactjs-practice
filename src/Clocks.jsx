import { useEffect, useState } from "react";

const Clocks = ({color}) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [])
    return (
        <div>
            <h1 style={
                {
                    background:"black",
                    color:color,
                    width: "120px",
                    padding : "20px",
                    margin : "10px"
                }
            }
            >{time}</h1>
        </div>
    )
}

export default Clocks;