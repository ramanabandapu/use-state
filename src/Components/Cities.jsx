import axios from "axios";
import React from "react";

export const Cities = () => {
  const [cities, setCities] = React.useState({});

  const [countries, setCountries] = React.useState([]);

  const [cityInfo,setCityInfo] = React.useState([])
  const getCountries = () => {
    axios.get("http://localhost:8080/countries").then((res)=> setCountries(res.data))
  };

  const postCities = () => {
    axios.post("http://localhost:8080/cities", cities).then((res)=>alert(`${res.data.city_name} added`))
  }
  const getCities = ()=>{
    axios.get("http://localhost:8080/cities").then((res)=>setCityInfo(res.data))
  }
  const handleOnChange = (e) => {
    const {name,value} = e.target
      setCities({...cities,[name] : value})
      
    }
    console.log(cities)
   const handleSubmit = (e)=>{
    e.preventDefault()
    postCities()
   }

  React.useEffect(() => {
    getCountries();
  }, []);

  React.useEffect(()=>{
    getCities();
  },[])


  return (
    <div>
      <h2>Add Cities</h2>
      <div>
        <form action="" onSubmit = {handleSubmit}>
          <input
            type="text"
            placeholder="Enter City Name"
            name = "city_name"
            value = {cities.city_name}
            onChange={handleOnChange}
          />
          <input
            type="Number"
            placeholder="Enter Population"
            name = "population"
            value = {cities.population}
            onChange={handleOnChange}
          />
          <select onChange={handleOnChange} name = "country_name" vlaue={cities.country_name}>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>


          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        <table border="1" cellspacing="5">
          <thead>
            <th>city</th>
            <th>country</th>
            <th>population</th>
          </thead>
          <tbody>
            {cityInfo.map((data)=>(
              <tr>
                <td>{data.city_name}</td>
                <td>{data.country_name}</td>
                <td>{data.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
