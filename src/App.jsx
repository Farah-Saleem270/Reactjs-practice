// import Login, {Profile , Setting, UserKey}from "./UserComponent"

// function App(){
//   return(
//     <div>
//     <h1>First Component</h1>
//      <Fruit></Fruit>
//      <Fruit />
//      <Color />
//      <Login />
//      <Profile />
//      <Setting />
//      <h1>{UserKey}</h1>
//     </div>

//   )
// }

// function Fruit(){
//   return(
//     <h1>Apple</h1>
//   )
// }


// function Color(){
//   return(
//     <h1>Red</h1>
//   )
// }

// export default App


// JSX in React js

// function App() {
//   const userName = "Farah";
//   let x = 20;
//   let y = 30;
//   return (
//     <>
//       <h1>JSX in React js {userName}</h1>
//       <h1>{10 + 20 + 30}</h1>
//       <h1>{x * y}</h1>
//       <button onClick={() => alert("hello")}>click</button>
//     </>
//   )
// }

// function App() {
//   function callFun() {
//     alert("function called")
//   }

//   const fruit = (name) => {
//     alert(name)
//   }


//   return (
//     <div>
//       <h1>Event and function call</h1>
//       <button onClick={callFun}>click me</button>
//       <button onClick={()=>fruit('apple')}>Apply</button>
//       <button onClick={()=>fruit('banana')}>Banana</button>
//     </div>
//   )
// }


// export default App

// State in react JS


// import { useState } from "react"
// import Counter from "./conuter"
// function App(){
//   let fruit = "Apple"
//   const handleFruit=()=>{
//     fruit = "Banana"
//   }
//   return(
//     <div>
//       <h1>State in react JS</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>change fruit name </button>
//     </div>
//   )
// }


// function App(){
//   const [friut, setFruit]=useState ("Apple")
//   const handleFruit=()=>{
//     setFruit("Banana")
//   }

//   return (
//     <div>
//       <h1>State in react JS</h1>
//       <h1>{friut}</h1>
//       <button onClick={handleFruit}>Chnage Fruit Name</button>
//       <Counter />
//     </div>
//   )
// }
// export default App

// import { useState } from "react"
// import User from "./User"
// function App() {
//   const [display, setDisplay] = useState(false)//ture
//   return (
//     <>
//       <h1>Toggle or Hide Show</h1>
//       <button onClick={() => setDisplay(!display)}>Toggle</button>

//       {
//         // display ? <h1>Farah</h1> : null
//         display ? <User /> : null
//       }
//     </>
//   )
// }

// export default App

// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1> Multiple Conditions or Else If</h1>
//       <h1>{count}</h1>
//       <button onClick={()=> setCount(count+1)}>Counter</button>
//       {
//         count==0? <h1>Condition 0</h1> 
//         :count==1? <h1>Condition 1</h1>
//         :count==2? <h1>Condition 2</h1>
//         :count==3? <h1>Condition 3</h1>
//         :count==4? <h1>Condition 4</h1>
//         :null
//       }
//     </div>
//   )
// }

// export default App


//Pass data between component
import User from "./User"
function App(){
  // let Username = "Farah";
  // let age = 19;
  // let email = "farah@gmail.com";

  let Userobj = {
    name : "Ali",
    age : 25,
    email : "Ali@gmail.com",

  }
  let Userobj2 = {
    name : "Farah",
    age : 19,
    email : "Farah@gmail.com",

  }
  return(
    <div>
      <h1>Props in React JS</h1>
      {/* <User name="Yaha" age={19} email="@hdshdshd"/> */}
      {/* <User name={Username} age={age} email={email}/> */}
      <User user= {Userobj}/>
      <User user= {Userobj2}/>
    </div>
  )
}

export default App