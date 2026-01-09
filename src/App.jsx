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

export default App


// JSX in React js

function App(){
  const userName = "Farah";
  let x = 20;
  let y = 30;
  return(
    <>
    <h1>JSX in React js {userName}</h1>
    <h1>{10+20+30}</h1>
    <h1>{x*y}</h1>
    <button onClick={()=> alert("hello")}>click</button>
    </>
  )
}