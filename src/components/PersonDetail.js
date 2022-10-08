import { useState } from "react";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

//All data stored
//import { AllPeopleContext } from '../App';

const PersonDetail = () => {
    // console.log("Inside PersonDetail react component!");
    // Grab route parameters - The id part extracted from the URL
    const { id } = useParams();

    const [detailOfAPerson, setDetailOfAPerson] = useState({});

    let navigate = useNavigate();   

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
            console.log("An error occured during DB fetching...in PersonDetail");
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

    const removePost= async () => {
        console.log('DELETE Request in removePost...');
        try {
          const request = await axios.delete(
            "https://localhost:7095/React/deletepersonfromdb/" + id
          );
          console.log(request);
        } catch (error) {
          console.log(error);
        }
      };

    //Fetch from db better
    const handleClickDeletePerson = () => {
        console.log("You clicked the delete person. The personid is= " + id);
        removePost();
        navigate("/");   
    }

    return (  
        <div className="person-details container-fluid">
            {/* <h2>This should return a detailed info about a person with id={id}</h2> */}
           
            {/* Subject to change */}
            <div className="row">
                <div className="col"><strong>Id person</strong></div>
                <div className="col"><strong>Fullname</strong></div>
                <div className="col"><strong>Phonenumber</strong></div>
                <div className="col"><strong>Language(s)</strong></div>
                <div className="col"><strong>City Id</strong></div> 
                <div className="col"><strong>City Name</strong></div>                                                                                                
                <div className="col"><strong>Action</strong></div>                
            </div>
            <div className="row">
                <div className="col">{ detailOfAPerson.idPerson } </div>
                <div className="col">{ detailOfAPerson.fullName } </div> 
                <div className="col">{ detailOfAPerson.phoneNumber }</div> 
                <div className="col">{ detailOfAPerson.languages } </div>
                <div className="col">{ detailOfAPerson.cityId }</div> 
                <div className="col">{ detailOfAPerson.cityName } </div>                                                                                                      
                <div className="col btn btn-danger btn-sm" onClick={ handleClickDeletePerson }>Delete</div>

            </div>

            <Link to="/personlist" className="btn btn-success btn-sm">Return to Person List</Link>
        </div>
    );
}
 
export default PersonDetail;