import { useState } from "react";

const Counter = () => {
    const [conut, setCount] = useState(0)
    const[rCounter, setRcounter]= useState(20)
    return (
        <div>
            <h1>Counter:{conut}</h1>
            <h1>RCounter:{rCounter}</h1>
            <button onClick={() => setCount(conut + 1)}>Update Counter</button>
            <button onClick={() => setRcounter(rCounter - 1)}>Update RCounter</button>
        </div>
    )
}

export default Counter;