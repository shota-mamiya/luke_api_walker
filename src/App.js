import './App.css';
import React, {useState} from 'react';
import {Router, navigate} from '@reach/router';
import HomeComponent from './components/HomeComponent';
import PeopleComponent from './components/PeopleComponent';
import PlanetComponent from './components/PlanetComponent';
import PeopleFail from './components/PeopleFail';

function App() {

  const [id, setID] = useState("");
  

  const [text, setText] = useState("people");

  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/${text}/${id}`);

  } 

  return (
    <div className="App">
      <form className="mainForm" onSubmit={ submitForm }>
        <label htmlFor="searchFor">Search For: </label> 
        <select className="select-dropdown" onChange={ (e) => setText(e.target.value)} value={text}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <br/>
        <label htmlFor="id">ID:</label>
        <input className="id-inputField" type="number" onChange={ (e) => setID(e.target.value)} value={id}/>
        <input className="search-button" type="submit" value="Search" />
      </form>

      <Router>
        <HomeComponent path="/home"/>
        <PeopleComponent path="/people/:id"/>
        <PlanetComponent path="/planets/:id"/>
      <PeopleFail path="/404"/>
      </Router>

    </div>
  );
}

export default App;
