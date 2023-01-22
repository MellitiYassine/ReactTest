import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("Creation of employee is done ");
    });
  };

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      //console.log(response.data);
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        ></input>
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        ></input>
        <label>Wage(year):</label>
        <input
          type="text"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        ></input>
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div>
        <button onClick={getEmployee}>Show Employee</button>
        {employeeList.map((val, key) => {
          console.log(val);
          return (
            <div key={key} className="employee">
              <h2>{val.Name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
