function User({user}){
    console.log(name);
    
    return(
        <div>
            <hr />
            <h1>Farah Me</h1>
            <h2>Name : {user.name}</h2>
            <h2>Age : {user.age}</h2>
            <h2>Email : {user.email}</h2>
        </div>
    )
}

export default User