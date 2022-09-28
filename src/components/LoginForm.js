import { useState } from "react";

const LoginIn = () => {
    // console.log("Inside LoginIn react component!");
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username: " + userName);
        console.log("passWord: " + passWord);
      }

    return ( 
        <form onSubmit={ handleSubmit } className="form-control">
            <h2>Login</h2>

            <div className="form-group row">
                <label htmlFor="labelUserName" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputUserName" 
                value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="labelPassWord" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassWord" 
                value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                </div>
            </div>

        <input type="submit" value="Login" className="btn btn-primary" />     
        </form>
     );
}
 
export default LoginIn;
