import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

//All data stored
import { AllPeopleContext } from '../App';

const PersonDetail = () => {
    // console.log("Inside PersonDetail react component!");
    // Grab route parameters - The id part extracted from the URL
    const { id } = useParams();
    // const multiplePeopleData = useContext(ManyPeopleContext);
    const multiplePeopleData = useContext(AllPeopleContext);

    //Small Error check
    if (isNaN(id) || id  <= 0 || id > multiplePeopleData.length)
    {
        return (
            <div>Invalid route parameter</div>
        );
    }

    const currentPersonDetail = multiplePeopleData.find(e => e.id == id);
    //console.log(currentPersonDetail);

    return (  
        <div className="person-details container-fluid">
            {/* <h2>This should return a detailed info about a person with id={id}</h2> */}

            <div className="row">
                {/* To header title */}
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
            </div>
            <Link to="/personlist" className="btn btn-success btn-sm">Return to Person List</Link>
        </div>
    );
}
 
export default PersonDetail;