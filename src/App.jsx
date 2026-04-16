// import Login, {Profile , Setting, UserKey}from "./UserComponent"

import { useState } from "react";
import User from "./User";
import Wrapper from "./wrapper";
import Skills from "./checkBoxes";

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
// import { useState } from "react"
// import College from "./college"
// import Student from "./student"
// import User from "./User"
// function App(){
//   // let Username = "Farah";
//   // let age = 19;
//   // let email = "farah@gmail.com";

//   let Userobj = {
//     name : "Ali",
//     age : 25,
//     email : "Ali@gmail.com",

//   }
//   let Userobj2 = {
//     name : "Farah",
//     age : 19,
//     email : "Farah@gmail.com",

//   }

//   let collegeName = ['LKH', 'AF', 'VTY', 'NIT']
//   const [student, setStudent]=useState()

//   return(
//     <div>
//       <h1>Props in React JS</h1>
//       {/* <User name="Yaha" age={19} email="@hdshdshd"/> */}
//       {/* <User name={Username} age={age} email={email}/> */}
//       <User user= {Userobj}/>
//       <User user= {Userobj2}/>
//       <College  name={collegeName[0]}/>
//       { student && <Student name={student}/>}
//       <button onClick={()=>setStudent("Farah")}>Update Student Name</button>
//     </div>
//   )
// }

// export default App


// function App() {
//   const[value,setValue]=useState("Farah");
//   return (
//     <div>
//       {/* <h1>Hello</h1>
//       <Wrapper color="orange">
//          <h1>Hello Everyone</h1>
//       </Wrapper>
//       <Wrapper>
//          <h1>Hello Fari</h1>
//       </Wrapper> */}
//       {/* <User name= "Farah"/>
//       <User/> */}
//       {/* <h1>Get Input Faild</h1>
//       <input type="text" value={value} onChange={(event) => setValue
//         (event.target.value)} placeholder="Enter user name" />
//         <h1>{value}</h1>
//         <button onClick={()=>setValue("")}>Clear Value</button> */}
//     </div>
//   )
// }
// export default App;



// function App() {
//   const [name,setName] = useState('');
//   const [password,setPassword ]= useState('');
//   const [email,setEmail ]= useState('');
//   return (
//     <div>
//       <h1>Controlled Component</h1>
//       <form action="" method="get">
//         <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
//         <br /> <br />
//         <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
//         <br /> <br />
//         <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
//         <br /> <br />
//         <button>Submit</button>
//         <button onClick={()=>{setEmail('');setName('');setPassword('')}}>Clear</button>
//         <h3>{name}</h3>
//         <h3>{password}</h3>
//         <h3>{email}</h3>
//       </form>
//     </div>
//   )
// }

// export default App;


function App() {
  const [gender, setGender] = useState('female');
  const [city, setCity] = useState('Lahore');

  return (
    <div>
      {/* <h1>Handle Checkbox in React js</h1> */}
      {/* <Skills /> */}


      <h1>Handle Radio Button and Dropdown</h1>
      <h4>Select gander</h4>
      <h2>Selected gender : {gender}</h2>
      <input onChange={(event) => setGender(event.target.value)} 
      value={'male'} type="radio" name="gender" id="male"  checked={gender == "female"}/>
      <label htmlFor="male">Male</label>
      <input onChange={(event) => setGender(event.target.value)}
       value={'female'} type="radio" name="gender" id="female"  checked={gender == "female"}/>
      <label htmlFor="female">Female</label>
      <br /><br /><br />
      <h4>Select city</h4>
      <select  onChange={(event)=>setCity(event.target.value)}>
        <option value="gujrawala" >Gujrawala</option>
        <option value="faislabad">Faislabad</option>
        <option value="lahore" selected>Lahore</option>
        <option value="karachi">Karachi</option>
       
      </select>
       <h2>Selected city : {city}</h2>

      
    </div>
  )
}

export default App;