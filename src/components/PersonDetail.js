import { useState } from "react";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

//All data stored
//import { AllPeopleContext } from '../App';

const PersonDetail = () => {
    // console.log("Inside PersonDetail react component!");
    // Grab route parameters - The id part extracted from the URL
    const { id } = useParams();

    const [detailOfAPerson, setDetailOfAPerson] = useState({});

    //Here should we retreive backend data from MVC BETA BETA BETA
    useEffect(() => {
        const idOfDetailedPerson = id;
        const urlString = "https://localhost:7095/React/persondetails/" + idOfDetailedPerson;
        axios.get(urlString)
        .then(function (response){
            //handle success            
            //Retrive data from db
        console.log("Detailed personinfo")
        console.log(response);
        
        setDetailOfAPerson(response.data);
            
        })
        .catch(function (error){
        //handle error
            console.log("An error occured during DB fetching");
        })
        .then(function() {
            console.log("Always executed");
        });
    }, [])

    
    //OLD assignment
    //const multiplePeopleData = useContext(AllPeopleContext);
    console.log("The parameter is : " +  id);
    //Small Error check
    // if (isNaN(id) || id  <= 0 || id > multiplePeopleData.length)
    if (isNaN(id) || id  <= 0)
    {
        return (
            <div>Invalid route parameter</div>
        );
    }
    //Fetch from list
    //const currentPersonDetail = multiplePeopleData.find(e => e.id == id);
    //console.log(currentPersonDetail);

    //Fetch from db better


    return (  
        <div className="person-details container-fluid">
            {/* <h2>This should return a detailed info about a person with id={id}</h2> */}

            {/* <div className="row">
                <div className="col"><strong>List ID</strong></div>
                <div className="col"><strong>FirstName</strong></div>
                <div className="col"><strong>LastName</strong></div>
                <div className="col"><strong>Age</strong></div>
                <div className="col"><strong>Nationality</strong></div>
                <div className="col"><strong>Email</strong></div>  
            </div>
            <div className="row">
                <div className="col">{ id }</div>
                <div className="col">{ currentPersonDetail._firstName } </div>
                <div className="col">{ currentPersonDetail._lastName } </div>                
                <div className="col">{ currentPersonDetail._age }</div>
                <div className="col">{ currentPersonDetail._nationality }</div>
                <div className="col">{ currentPersonDetail._email }</div>                   
            </div> */}

            {/* Subject to change */}
            <div className="row">
                <div className="col"><strong>CITYOFperson</strong></div>
                <div className="col"><strong>LANGUage</strong></div>
                <div className="col"><strong>Id person</strong></div>
                <div className="col"><strong>Fullname</strong></div>                
                <div className="col"><strong>Phonenumber</strong></div>
                <div className="col"><strong>City Id</strong></div> 
                <div className="col"><strong>Action</strong></div>
                
            </div>
            <div className="row">
                <div className="col">{ detailOfAPerson.cityOfPerson } </div>
                <div className="col">{ detailOfAPerson.languages } </div>
                <div className="col">{ detailOfAPerson.idPerson } </div>
                <div className="col">{ detailOfAPerson.fullName } </div>                        
                <div className="col">{ detailOfAPerson.phoneNumber }</div>
                <div className="col">{ detailOfAPerson.city_Id }</div> 
                <div className="col btn btn-danger btn-sm">Delete</div>

            </div>

            <Link to="/personlist" className="btn btn-success btn-sm">Return to Person List</Link>
        </div>
    );
}
 
export default PersonDetail;