import Login, {Profile , Setting, UserKey}from "./Usercomponent"

function App(){
  return(
    <div>
    <h1>First Component</h1>
     <Fruit></Fruit>
     <Fruit />
     <Color />
     <Login />
     <Profile />
     <Setting />
     <h1>{UserKey}</h1>
    </div>
    
  )
}

function Fruit(){
  return(
    <h1>Apple</h1>
  )
}


function Color(){
  return(
    <h1>Red</h1>
  )
}

export default App