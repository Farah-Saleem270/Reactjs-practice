import Student from "./student";

const Data = ({ college }) => {
  return (
    <div style={{
      backgroundColor: "#ccc",
      borderBottom: "1px solid black",
      margin: "20px",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <h1>Name : {college.name}</h1>
      <ul>
        <li>
          <h3> City : {college.city}</h3>
        </li>
        <li>
          <h3> Website : {college.website}</h3>
        </li>
         <Student student={college.student}/>
      </ul>
    </div>
  )
}

export default Data;