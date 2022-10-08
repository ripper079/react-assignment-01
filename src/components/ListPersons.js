import axios from 'axios';
import { useState, useEffect } from 'react';
import PersonDataLine from './PersonData';

// Start with UPPERCASE letter when naming react components
//const ListAllPersons = () => {    //Alt 1
// Start with UPPERCASE letter when naming react components
function ListAllPersons(props) {         //Alt 2 
    // console.log("Inside ListAllPersons react component!");    
    const [personsTableDB, SetPersonsTableDB] = useState([]);


    //Here should we retreive backend data from MVC BETA BETA BETA
    useEffect(() => {
        console.log("useEffect in ListAllPersons...");
        const mockIdOfPerson = 6;
        const urlString = "https://localhost:7095/React/getallpeople";
        axios.get(urlString)
        //axios.get("https://localhost:7095/React/people/3")
        //axios.get("https://localhost:7095")
        .then(function (response){
            //handle success      
            console.log("Listing all people from db");
            //Retrive data from db
            //save it in a list            
            var listOfPersons = response.data;   
            //console.log(response);
            //console.log("Status= " + response.status);            
            //Copy array
            const copyAllPersonsFromTable = listOfPersons.map((x) => x);

            // copyAllPersons.forEach(oneperson => {
            //     console.log(oneperson.fullName);
            // });
            SetPersonsTableDB(copyAllPersonsFromTable);
            
        })
        .catch(function (error){
        //handle error
            console.log("An error occured during DB fetching");
        })
        .then(function() {
            console.log("Always executed");
        });
    }, [])

    // const persons = props.listOfAllPersons;
    // const countPersonInList =  persons.length;    

    const countPersonInList = personsTableDB.length;

    //console.log("Current value for personsTableDB");
    //console.log(personsTableDB);

    const handleClickSortByName = () => {
        console.log("Listing people by FullName");
        //Copy existing data
        const sortedByFullNameList = personsTableDB.map((x) => x);
        //Sort the data        
        sortedByFullNameList.sort((a, b) =>{
            if (a.fullName < b.fullName){
                return -1;
            }
            if (a.fullName > b.fullName){
                return 1;
            }
            return 0;
        });
        SetPersonsTableDB(sortedByFullNameList);
    }


    if (countPersonInList === 0)
        return (<div>There are no entries</div>);

    return (        
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col"><strong>List ID</strong></div>
                <div className="col"><strong>FirstName</strong></div>
                <div className="col"><strong>LastName</strong></div>                
                <div className="col"><strong>Action</strong></div> */}


                <div className="col"><strong>IdPerson</strong></div>
                <div className="col"><strong>FullName</strong></div>
                <div className="col"><strong>PhoneNumber</strong></div>                
                <div className="col"><strong>Action</strong></div>
            </div>

                    
            {/* {persons.map((e) => (                 
                <PersonDataLine key={e.id} apersonrecord={e} />  
            ))}     */}

            {personsTableDB.map((e) => (                 
                <PersonDataLine key={e.idPerson} apersonrecord={e} />  
            ))}  

            <div className="btn btn-primary btn-sm" onClick={ handleClickSortByName }>Sort table by Full Name</div>                    
       </div>               
    )};

//Export our component so we can use it in other files
export default ListAllPersons; 