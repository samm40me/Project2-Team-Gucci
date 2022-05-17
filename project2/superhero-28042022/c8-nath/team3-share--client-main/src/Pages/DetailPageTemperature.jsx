import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailTemperatureComponent = () => {
  const params = useParams();
  const id = params.id;
  const [temperatureList, setTemperatureList] = useState();
  // const [data, setData] = useState()
  // const [error, setError] = useState()
  // const [loading, setLoading] =useState()
  
  const navigate = useNavigate();

  useEffect ( () => {
    const getweather = async () =>{
try{
  let response = await fetch("https://api.weather.gc.ca/collections/climate-daily/items?CLIMATE_IDENTIFIER=3031094")
  let weatherresponse = await response.json()
  console.log (`THIS ---:`, weatherresponse.features)
 return setTemperatureList(weatherresponse)

} catch (ex) {
        console.log(ex);
      }
    }
    getweather()

  },[])

  if (!temperatureList) {
    return <p>Loading ... </p>;
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "2fr 3fr",
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >

      <button onClick={() => navigate("/")}> GO TO LIST </button>
      <label>_id:</label>
      <span>{temperatureList.ID}</span>
      <br />
      <label>climate identifier:</label>
      <span>{temperatureList.CLIMATE_IDENTIFIER}</span>
      <br />
      <label>year:</label>
      <span>{temperatureList.LOCAL_YEAR}</span>
      <br />
      <label>month:</label>
      <span>{temperatureList.month}</span>
      <br />
      <label>capacity:</label>
      <span>{temperatureList.capacity}</span>
      <br />
      <button onClick={() => navigate("/edit/" + temperatureList._id)}> EDIT </button>
      {/* {JSON.stringify(superhero)} */}
    </div>
  );
};

export default DetailTemperatureComponent;
