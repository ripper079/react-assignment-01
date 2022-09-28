import { useNavigate } from "react-router-dom";

const Logout = (props) => {    
    const handleLogout = props.logout;

    let navigate = useNavigate();

    const handleButtonLogout = () => {        
        //Update state for loged out user after user clicks button
        handleLogout();
        //Go back main page
        navigate("/");
    }
    
    return (  
        <div>
            <h2>Do you want to log out?</h2>
            <button onClick={handleButtonLogout} className="btn btn-primary"> 
                Yes
            </button>
        </div>
    );
}
 
export default Logout;