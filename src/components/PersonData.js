import { Link } from 'react-router-dom';

function PersonDataLine(props){    
    // console.log("Inside PersonDataLine react component!");

    var link = "/persondetails/" + props.apersonrecord.id;
    return (
        // <div className="row" key={ props.apersonrecord.id }>

        <div className="row">
            <div className="col">{ props.apersonrecord.id } </div>
            <div className="col">{ props.apersonrecord._firstName } </div>        
            <div className="col">{ props.apersonrecord._lastName }</div>
            {/* <div className="col">{ props.apersonrecord._age }</div>
            <div className="col">{ props.apersonrecord._nationality }</div>
            <div className="col">{ props.apersonrecord._email }</div>             */}
            {/* <Link to={link} className="col btn btn-success btn-sm">Details</Link> */}
            <Link to={`/persondetails/${props.apersonrecord.id}`} className="col btn btn-success btn-sm">Details</Link>
            
                             
        </div>
    )};

export default PersonDataLine;
