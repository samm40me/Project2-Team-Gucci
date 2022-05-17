import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailShelterComponent = () => {
  const params = useParams();
  const id = params.id;
  const [shelterList, setShelterList] = useState();
  // const [data, setData] = useState()
  // const [error, setError] = useState()
  // const [loading, setLoading] =useState()
  
  const navigate = useNavigate();

  useEffect ( () => {
    const getshelters = async () =>{
try{
  let response = await fetch('https://data.calgary.ca/resource/7u2t-3wxf.json')
  let shelterresponse = await response.json()
  console.log (`THIS ---:`, shelterresponse)
 return setShelterList(shelterresponse)

} catch (ex) {
        console.log(ex);
      }
    }
    getshelters()

  },[])

  if (!shelterList) {
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
      <span>{shelterList._id}</span>
      <br />
      <label>sheltername:</label>
      <span>{shelterList.sheltername}</span>
      <br />
      <label>year:</label>
      <span>{shelterList.year}</span>
      <br />
      <label>month:</label>
      <span>{shelterList.month}</span>
      <br />
      <label>capacity:</label>
      <span>{shelterList.capacity}</span>
      <br />
      <button onClick={() => navigate("/edit/" + shelterList._id)}> EDIT </button>
      {/* {JSON.stringify(superhero)} */}
    </div>
  );
};

export default DetailShelterComponent;
