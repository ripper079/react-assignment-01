//  import logo from './logo.svg';
import './App.css';

import { useState } from "react";
//User defined
import Personform from './components/Person-form';
import ListAllPersons from './components/ListPersons';


let idNumber = 2;

//Aka 'root component'
function App() {
  const titleAssignment = "Assignment 01 - React Introduction";
  const linkToReact = "https://reactjs.org";

  //Hook it up - An array of persons
  const [persons, setPersons] = useState([
    // {
    //     id : 1, 
    //     _firstName : "Niranchaya", 
    //     _secondName : "Suay panraya",
    //     _age : 37,
    //     _nationality : "Thai",
    //     _email : "frugan@best.com"
    // },
    // {
    //     id : 2,
    //     _firstName : "Alexander", 
    //     _secondName : "Hajen",
    //     _age : 10,
    //     _nationality : "Swedish",
    //     _email : "tuffaste@killen.se"
    // }
    
]);


function handleCreatePerson(firstName, secondName, age, nationality, email) 
{
  // console.log("Inside handleCreatePerson...");
  let aNewPerson = {
    id : ++idNumber,
    _firstName : firstName, 
    _secondName : secondName,
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
      <a href={linkToReact} target="_blank" rel="noopener noreferrer">React HomePage</a>
        <p><strong>React</strong> Powered Application!</p>        
        <p>{ titleAssignment }</p>        
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         */}
        
         
                 
      </header>
      <nav></nav>
      
      {/* Main Content */}
      <main>
        <div>
          <h2>All person(s) in the LIST</h2>          
          <ListAllPersons listOfAllPersons={ persons } />           
        </div>
        <div>          
            <Personform addNewPersonToList={handleCreatePerson} authorApp="Daniel Ojka"/>          
        </div>
      </main>
    </div>
  );

}

//Export our component so we can use it in other files
export default App;
