// function User({user}){
//     console.log(name);

import { use } from "react";


//     return(
//         <div>
//             <hr />
//             <h1>Farah Me</h1>
//             <h2>Name : {user.name}</h2>
//             <h2>Age : {user.age}</h2>
//             <h2>Email : {user.email}</h2>
//         </div>
//     )
// }

// export default User


// function User({name="New User"}){
//     return(
//         <div>
//             <h1>User Component</h1>
//             <h1>Hi, {name}</h1>
//         </div>
//     )
// }

// export default User;


const User = ({ user }) => {
    return (
        <div style={
            {
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                width: "400px",
                borderRadius: "10px"
            }
        }>
            {/* <h1>User Component</h1> */}
            <h3>Name : <span style={{ color: 'red' }}>{user.name}</span></h3>
            <h3>Email : <span style={{ color: 'green' }}>{user.email}</span></h3>
            <h3>Age : <span style={{ color: 'blue' }}>{user.age}</span></h3>
        </div>
    )
}

export default User;