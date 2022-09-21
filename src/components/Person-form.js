import { useState } from "react";

//Implementation of a 'controlled component'

// Start with UPPERCASE letter when naming react components
//The props is actually a function
function Personform(props) {    
    const handleCreatePerson = props.addNewPersonToList;

    //UseState return an array of 2 elements, hook it up :)
    const [firstName, setFirstName] = useState("Default FirstName");
    const [secondName, setSecondName] = useState("Default SecondName");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("Default Nationality");
    const [email, setEmail] = useState("Default@Email.se");

    
    const handleSubmit = (e) => {
        //Prevent default refreasing of page
        e.preventDefault();
        //console.log("Before - Handle submit hit!!!");
        handleCreatePerson(firstName, secondName, age, nationality, email);
        //console.log("After - Handle submit hit!!!");
    }

    return (
        
        //Will invoke the handleSubmit function      
        // <form onSubmit={handleSubmit} className="form-control">
        <form onSubmit={ handleSubmit } className="form-control">
            <h2>Insert Person data</h2>

          <div className="form-group row">
            <label htmlFor="labelFirstName" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputFirstName" 
              value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="labelSecondName" className="col-sm-2 col-form-label">Second Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputSecondName" 
              value={secondName} onChange={(e) => setSecondName(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="labelAge" className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputAge" min="0" max="200" 
              value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="laberNationality" className="col-sm-2 col-form-label">Nationality</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputNationality" 
              value={nationality} onChange={(e) => setNationality(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="labelEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" 
              value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          
          <input type="submit" value="Add a Person" className="btn btn-primary" />                  
        </form>        
    )};

//Export our component so we can use it in other files
export default Personform;    