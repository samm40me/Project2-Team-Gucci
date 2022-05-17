import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailComponent = () => {
  const params = useParams();
  const id = params.id;
  const [superhero, setSuperhero] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getSuperhero = async () => {
      let response = await fetch("/superheroes/" + id);
      let data = await response.json();
      // setTimeout(() => setSuperhero(data), 3000);
      setSuperhero(data);
    };
    getSuperhero();
  }, [id]); // end of use effect

  if (!superhero) {
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
      <span>{superhero._id}</span>
      <br />
      <label>name:</label>
      <span>{superhero.name}</span>
      <br />
      <label>superpowers:</label>
      <span>{superhero.superpowers}</span>
      <br />
      <label>alterEgo:</label>
      <span>{superhero.alterEgo}</span>
      <br />
      <label>durability:</label>
      <span>{superhero.durability}</span>
      <br />
      <button onClick={() => navigate("/edit/" + superhero._id)}> EDIT </button>
      {/* {JSON.stringify(superhero)} */}
    </div>
  );
};

export default DetailComponent;
