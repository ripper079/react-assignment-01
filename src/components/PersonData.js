import { Link } from 'react-router-dom';

function PersonDataLine(props){    
    // console.log("Inside PersonDataLine react component!");

    var link = "/persondetails/" + props.apersonrecord.idPerson;
    return (
        // <div className="row" key={ props.apersonrecord.id }>

        <div className="row">
            {/* <div className="col">{ props.apersonrecord.id } </div> */}
            <div className="col">{ props.apersonrecord.idPerson } </div>            
            <div className="col">{ props.apersonrecord.fullName } </div>        
            <div className="col">{ props.apersonrecord.phoneNumber }</div>


            


            <Link to={`/persondetails/${props.apersonrecord.idPerson}`} className="col btn btn-success btn-sm">Details</Link>
            
                             
        </div>
    )};

export default PersonDataLine;
