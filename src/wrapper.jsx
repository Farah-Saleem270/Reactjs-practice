function Wrapper({children,color="blue"}){
    return(
        <div style={{color:color, border:"5px solid black", width:"300px", padding:"10px", margin:"10px"}}>
          {children}
        </div>
    )
}

export default Wrapper;