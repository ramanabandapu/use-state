import React from "react";
import axios from "axios";
export const Countries = () => {
  const [countries, setCountries] = React.useState([]);
  const [name,setName] = React.useState("")
  const getCountries = ()=>{
    axios
    .get("http://localhost:8080/countries")
    .then((res) => setCountries(res.data));
  }
  React.useEffect(() => {
   getCountries()
  }, []);

  const handleAddCountry =(e)=>{
    e.preventDefault();
    axios({
      method: "POST",
      url : "http://localhost:8080/countries",
      data : {name}
    })
    getCountries()
  }
  return (
    <>
      <h2>Countries</h2>
     
      <br />
      <div>
        <form onSubmit={handleAddCountry}>
          <input type="text" placeholder="Enter Country" onChange={(e)=>setName(e.target.value)}/>
          <button type = "submit" >Add Country</button>
        </form>
      </div>

     
    </>
  );
};
