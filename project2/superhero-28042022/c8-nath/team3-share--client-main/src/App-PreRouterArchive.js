import React, { useEffect, useState } from "react";
import "./App.css";
import DetailComponent from "./Pages/DetailPage";
import SuperheroData from "./components/SuperheroData";
import SuperheroForm from "./components/SuperheroForm";

function App() {
  const [superheroList, setSuperheroList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState()
  console.log(`superheroList: ${JSON.stringify(superheroList)}`);

  useEffect(() => {
    getSuperheroList();
  }, []);

  const getSuperheroList = async () => {
    try {
      let response = await fetch("/superheroes");
      let superheroresponse = await response.json();
      console.log(`superheroes is:`, superheroresponse);
      return setSuperheroList(superheroresponse);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
<DetailComponent id ={id}/>
      <header className="App-header">
        <h1>Superheroes</h1>
      </header>
      {superheroList ? (
        superheroList.map((superhero) => {
          return <SuperheroData superhero={superhero} changeDetails={setId}/>;
        })
      ) : (
        <div> Loading...</div>
      )}

      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        {" "}
        Add New Superhero
      </button>
      {showModal && <SuperheroForm setShowModal={setShowModal}/>}
    </div>
  );

}

export default App;
