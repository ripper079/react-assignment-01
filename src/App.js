//  import logo from './logo.svg';
import './App.css';

import React from 'react';
//State management
import { useState, useContext } from "react";
//Routing
import { Link, Route, Routes } from 'react-router-dom';

//User defined
import Personform from './components/Person-form';
import ListAllPersons from './components/ListPersons';
import Home from './components/Home';
import PersonDetail from './components/PersonDetail';
import NotFound from './components/NotFound';
import LoginIn from './components/LoginForm';

//Generating 'correct' id numbers
let idNumber = 2;


//Test of new prospect - Need to be just before the function App()
//Purpose to avoid 'props drilling'
export const AllPeopleContext = React.createContext();

//Aka 'root component'
function App() {
  // console.log("Inside App react component!");
  const titleAssignment = "Assignment 02 - React Routes";
  const linkToReactRouter = "https://reactrouter.com/en/main";

  //Loginstatus and userinfo
  const [isLoggedIn, setLogin] = useState(false);
  const [nameOfLoggedIn, setNameOfLoggedIn] = useState(null);

  //Hook it up - An array of persons
  const [persons, setPersons] = useState([
    {
        id : 1, 
        _firstName : "Niranchaya", 
        _lastName : "Suay panraya",
        _age : 37,
        _nationality : "Thai",
        _email : "frugan@best.com"
    },
    {
        id : 2,
        _firstName : "Alexander", 
        _lastName : "Hajen",
        _age : 10,
        _nationality : "Swedish",
        _email : "tuffaste@killen.se"
    }    
]);

//Adding a new person
function handleCreatePerson(firstName, lastName, age, nationality, email) 
{
  // console.log("Inside handleCreatePerson...");
  let aNewPerson = {
    id : ++idNumber,
    _firstName : firstName, 
    _lastName : lastName,
    _age : age,
    _nationality : nationality,
    _email : email    
  };
  
  const newPersonsList = persons.map((x) => x);
  newPersonsList.push(aNewPerson);
  setPersons(newPersonsList);    
}

  return (
    <div className="App">
      <header className="App-header">
      
      <a href={linkToReactRouter} target="_blank" rel="noopener noreferrer">React Router</a>
        <p><strong>React</strong> Powered Application!</p>        
        <p>{ titleAssignment }</p>                                       
      </header>
      <nav>
        <h3>Big Data @ People</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personlist">List all persons</Link>
          </li>
          <li>
            <Link to="/addperson">Add a person</Link>
          </li>    
          <li>
            {isLoggedIn && <Link to="/logout">Logut</Link>}
            {!isLoggedIn && <Link to="/login">Login</Link>}
          </li>       
        </ul>
      </nav>
      
      <main>
        <AllPeopleContext.Provider value={persons}>
          <Routes>           
            <Route path ="/" element={<Home />} />  
            <Route path ="/persondetails/:id" element={<PersonDetail />} />
            <Route path ="/personlist" element={<ListAllPersons listOfAllPersons={ persons } />} />           
            <Route path ="/addperson" element={<Personform addNewPersonToList={handleCreatePerson} />} />        
            <Route path ="/login" element={<LoginIn />} />
            <Route path ="*" element={<NotFound />} />  
          </Routes>      
        </AllPeopleContext.Provider>
      </main>

    </div>
  );

}

//Export our component so we can use it in other files
export default App;
