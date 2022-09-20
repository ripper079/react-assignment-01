import { useState } from "react";

// Start with UPPERCASE letter when naming react components
//const ListAllPersons = () => {    //Alt 1
// Start with UPPERCASE letter when naming react components
function ListAllPersons(props) {         //Alt 2 
    const persons = props.listOfAllPersons;

    //An array of person - Create on the fly
    // const [persons, setPerson] = useState([
    //     {
    //         id : 1, 
    //         _firstName : "Daniel", 
    //         _secondName : "Mikael",
    //         _age : 42,
    //         _nationality : "Swedish",
    //         _email : "daniel@oikarainen.se"
    //     },
    //     {
    //         id : 2,
    //         _firstName : "Pekka", 
    //         _secondName : "Hajen",
    //         _age : 22,
    //         _nationality : "Finish",
    //         _email : "finnish@shark.fi"
    //     }
        
    // ]);

    return (
        
        <div className="container-fluid">            
                {persons.map((e) => ( 
                    <div className="row" key={e.id}>                                                
                        <div className="col">{ e._firstName }</div>        
                        <div className="col">{ e._secondName }</div>
                        <div className="col">{ e._age }</div>
                        <div className="col">{ e._nationality }</div>
                        <div className="col">{ e._email }</div>
                    </div>
                ))}                                                    
       </div>               
    )};

//Export our component so we can use it in other files
export default ListAllPersons; 