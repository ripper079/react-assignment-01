import { Link } from "react-router-dom";

const NotFound = () => {
    console.log("Inside NotFound react component!");
    return (  
        <div>
            <h1>404</h1>
            <h4>PAGE NOT FOUND</h4>
            <h6>The resource requested could NOT be found on this server!</h6>
            <Link to="/" className="btn btn-success btn-sm">Return to home page</Link>
        </div>
    );
}
 
export default NotFound;