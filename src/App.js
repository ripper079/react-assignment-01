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
import Login from './components/LoginForm';
import Logout from './components/Logout';

//Generating 'correct' id numbers, toogle between this to to get correct behaviour
let idNumber = 0;       
//let idNumber = 2;

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
  const [isLoginFail, setLoginFail] = useState(false);

  //Hook it up - An array of persons
  //Make SURE to set idNumber correct
  //  - When commented out use idNumber = 0
  //  - When NOT commented out use idNumber = 2
  const [persons, setPersons] = useState([
    // {
    //     id : 1, 
    //     _firstName : "Niranchaya", 
    //     _lastName : "Suay panraya",
    //     _age : 37,
    //     _nationality : "Thai",
    //     _email : "frugan@best.com"
    // },
    // {
    //     id : 2,
    //     _firstName : "Alexander", 
    //     _lastName : "Hajen",
    //     _age : 10,
    //     _nationality : "Swedish",
    //     _email : "tuffaste@killen.se"
    // }    
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

function handleLoginPerson(userName){
  //console.log("Inside handleLoginPerson...for user=" + userName);
  setLogin(true);
  setNameOfLoggedIn(userName);
  setLoginFail(false);
  
}

function handleLogoutPerson(){
  //console.log("Inside handleLogoutPerson...");
  setLogin(false);
  setNameOfLoggedIn(null);
  setLoginFail(false);
}



  return (
    <div className="App">
      <header className="App-header">
      
      <a href={linkToReactRouter} target="_blank" rel="noopener noreferrer">React Router</a>
        <p><strong>React</strong> Powered Application!</p>        
        <p>{ titleAssignment }</p>
        { isLoggedIn && <p>'{nameOfLoggedIn}' is logged in</p> }
        { isLoginFail && <p>A FAILED login attempt</p> }
        
      </header>
      <nav>
        <h3>Big Data @ People</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          {isLoggedIn && <Link to="/personlist">List all persons</Link>}
          </li>
          <li>
            {isLoggedIn && <Link to="/addperson">Add a person</Link>}
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
            <Route path ="/login" element={<Login  login={handleLoginPerson}   loginfail={setLoginFail} />} />
            <Route path ="/logout" element={<Logout  logout={handleLogoutPerson} />} />
            <Route path ="*" element={<NotFound />} />  
          </Routes>      
        </AllPeopleContext.Provider>
      </main>

    </div>
  );

}

//Export our component so we can use it in other files
export default App;
