import React from 'react'
import { useNavigate } from 'react-router-dom';
import SuperheroForm from '../components/SuperheroForm'

function CreateShelterPage() {
const navigate=useNavigate();
    const onFormSubmit = async (superhero) => {
        const newSuperhero = {
          name: superhero.name,
          alterEgo: superhero.alterEgo,
          durability: superhero.durability,
          superpowers: superhero.superpowers,
        };

        const data = JSON.stringify(newSuperhero);
        console.log(`creating new superhero: ${data}`);
    
        const response = await fetch("/superheroes", {
          method: "POST",
          headers: { "Content-Type": "application/json" ,},
          body: data //body has to be a string... not an object
        });

        if (response.status === 200) {
          console.log(`success`);
          navigate(`/`)
        } else {
          alert(`error creating superhero`);
        }
      };

  return (
    <div>
        <h2>Add New Superhero</h2>
    <SuperheroForm onFormSubmit={onFormSubmit} buttonText={"Create Superhero"}/></div>
  )
}

export default CreateShelterPage