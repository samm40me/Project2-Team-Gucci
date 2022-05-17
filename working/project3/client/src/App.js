import './App.css';
import { useState } from 'react'
import FileBase from "react-file-base64";
import Axios from "axios"
import Footer from "./Footer/Footer"



function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState("0");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState({
    picture: "",
  });

  const [newEmail, setNewEmail] = useState("");

  

const [patientList, setPatientList] = useState([])


  const addPatient = () => {
  Axios.post("http://localhost:3001/create", {
    name: name,
    age: age,
    location: location,
    email: email,
    picture: picture,
  }).then(() => {
    setPatientList([
      ...patientList,
      {
        name: name,
        age: age,
        location: location,
        email: email,
        picture: picture,
      },
    ]);
  })

};

  const getPatients = () => {
    Axios.get("http://localhost:3001/patients").then((response) => {
      setPatientList(response.data);
    });
   
  };

  const updatePatientEmail = (id) => {
    Axios.put("http://localhost:3001/update", { email: newEmail, id: id }).then((response) => {
      setPatientList(patientList.map((val) => {
        return val.id === id ? { id: val.id, name: val.name, age: val.age, location: val.location, email: newEmail} : val
      }))
    })
  }
  const deletePatient = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPatientList(patientList.filter((val) => {
        return val.id !== id
      }))
    });
  }
  return (
    <div className="App">
      <div className="Profile">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="Number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Location:</label>
        <input
          type="text"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <div className="picture">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPicture({ picture: base64 })}
          />
        </div>
        <button onClick={addPatient}>Add Patient</button>
      </div>
      <div className="patients">
        <button onClick={getPatients}>Show Patients</button>
        {patientList.map((val, key) => {
          return (<div className='patient'>
            <div>
            <h3>Name: {val.name}</h3>
            <h3>Age: {val.age}</h3>
            <h3>Location: {val.location}</h3>
            <h3>Email: {val.email}</h3>
            </div>
            <div><input type="text" placeholder="jb@gmail.com..." onChange={(event) => {
              setNewEmail(event.target.value);
            }}
            />
              <button onClick={() => { updatePatientEmail(val.id) }}>Update</button>
              <button onClick={() =>deletePatient(val.id)}>Delete</button>
            </div>
          </div>);
        })}

      </div>
      < Footer/>
    </div>
  );
}

export default App;
