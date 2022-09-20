 import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>App Powered by React!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
{/*         
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         */}

        <form method="post" class="form-control">
        <h2>Insert Person data</h2>
            {/*                                     
            <p>
                <label>First Name: <input type="text" name="humantemperature" /></label>
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>     */}
        
        <div className="form-group">
          <label>First name: </label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Second name: </label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Age: </label>
          <input type="number" className="form-control" />
        </div>

        <div className="form-group">
          <label>Nationality: </label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Email: </label>
          <input type="email" className="form-control" />
        </div>

        <input type="submit" value="Add a Person" className="btn btn-primary" />

        
        </form>         



      </header>
    </div>
  );
}

export default App;
