import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    // console.log("Inside LoginIn react component!");
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    
    const handleLoginPerson = props.login;
    const loginfail = props.loginfail;


    let navigate = useNavigate();

    //Fake (mock) admin account
    const fakeAccount = {
        userName: "foobar",
        userPassWord: "12345"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fakeAccount.userName === userName && fakeAccount.userPassWord === passWord){
            // console.log("Account exist, logging in");
            handleLoginPerson(userName);
            navigate("/");
        }
        else{
            //console.log("No account with the credentials is valid");
            loginfail(true);
            navigate("/");
        }
      }

    return ( 
        <form onSubmit={ handleSubmit } className="form-control">
            <h2>Login Page</h2>

            <div className="form-group row">
                <label htmlFor="labelUserName" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputUserName" required 
                value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="labelPassWord" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassWord" required 
                value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                </div>
            </div>

        <input type="submit" value="Log In!" className="btn btn-success" />     
        </form>
     );
}
 
export default Login;
