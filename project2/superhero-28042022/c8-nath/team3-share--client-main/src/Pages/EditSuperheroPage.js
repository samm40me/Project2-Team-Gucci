import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuperheroForm from "../components/SuperheroForm";

const EditSuperheroPage = () => {
  const Params = useParams();
  const id = Params.id;
const navigate = useNavigate()
  const [superhero, setSuperhero] = useState()

  useEffect(() => {
    const getSuperhero = async () => {
      let response = await fetch(`/superheroes/${id}`);
      let data = await response.json();
      setSuperhero(data);
    };
    getSuperhero();
  }, [id]);

const onFormSubmit = async (superhero) => {
  const data = JSON.stringify(superhero)
    let response = await fetch(`/superheroes/${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: data,
});  // close off fetch
if (response.status === 200) {
  console.log(`success`);
  // When done editing, on submit, it will take us back to the details page for that superhero
  navigate(`/details/${id}`)
} else {
  alert(`error editting superhero`);
}
}

  return (
    <div>
      <h2>Edit Superhero</h2>
      <SuperheroForm initialValues={superhero} onFormSubmit={onFormSubmit} buttonText={"Update Superhero"}/>
    </div>
  );

}

export default EditSuperheroPage
