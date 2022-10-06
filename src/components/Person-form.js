import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from 'axios';

//Implementation of a 'controlled component'

// Start with UPPERCASE letter when naming react components
//The props is actually a function
function Personform(props) {    
    // console.log("Inside Personform react component!");
    // const handleCreatePerson = props.addNewPersonToList;

    //UseState return an array of 2 elements, hook it up :)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    // const [idCountry, setIdCountry] = useState(0);
    // const [idCity, setIdCity] = useState(0);
    
    //Dropdown list of countries
    const [countries, setCountries] = useState([
      // {
      //   id : 2,
      //   countryName : "Russia"
      // }
    ]);
    //The current selected country, gives back countryid
    const [currentSelectedCountry, SetCurrentSelectedCountry] = useState("");
    //Gives back the index of dropdownlist of country
    // const [indexCurrentSelectedCountry, setIndexCurrentSelectedCountry]=useState(-1);

    //Dropdown list of countries
    const [cities, setCities] = useState([
      // {
      //   id : 4,
      //   cityName : "Russia"
      // }
    ]);
    //The current selected country, gives back id
    const [currentSelectedCity, SetCurrentSelectedCity] = useState("");
    
    let navigate = useNavigate();   
    
    const addPersonPost = async () => {
      var payload = {
        fullName: firstName + " " + lastName,
        phoneNumber: phoneNumber,
        CountryId: currentSelectedCountry,
        cityId: currentSelectedCity
      };
      console.log('POST Request - Async');
      try {
        const request = await axios.post(
          'https://localhost:7095/React/addapesontodb',
          payload
        );
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    };

    //Press button - Send form (POST) data to DB
    const handleSubmit = (e) => {
        e.preventDefault();  
        
        //Check valid data
        if (currentSelectedCountry === null || currentSelectedCountry.trim() === ""  || currentSelectedCountry === "disabled selected hidden" ||
        currentSelectedCity === null || currentSelectedCity.trim() === "" || currentSelectedCity === "disabled selected hidden" ){
          console.log("Invalid selection for country-dropbox or city-dropbox")
        }
        else {
          addPersonPost();
          //The actual data to be send, must match with corresponding action method in MVC app
        // var payload = {
        //   fullName: firstName + " " + lastName,
        //   phoneNumber: phoneNumber,
        //   CountryId: currentSelectedCountry,
        //   cityId: currentSelectedCity
        // };

        // console.log("Payload - (Non async)");
        // console.log(payload);

        // Post to db server insteed
        // axios.post("https://localhost:7095/React/addapesontodb", payload)        
        // .then(function (response){})
        // .catch(function (error){});
        }
                        

        navigate("/");        
    }

    let getDataAndPopulateDropdownList = async () => {
      //console.log("Inside getDataAndPopulateDropdownList...");  

      //Get data(all countries) from db
      const urlfetchCountries = "https://localhost:7095/React/abcgetallcountries";
      let responseCountries = await axios.get(urlfetchCountries);
      
      var listOfCountriesFromDB = responseCountries.data;      
      
      const extractIdAndNameOfCountry = listOfCountriesFromDB.map( (anItem) => {
        return {id : anItem.id, countryName : anItem.countryName};
      });
      //Set the droplist data for countries
      setCountries(extractIdAndNameOfCountry);   

      console.log("Id for current selected COUNTRY=" + currentSelectedCountry);
      console.log("Id for current selected CITY=" + currentSelectedCity);
           

      //Get all data(all cities in a country)
      //const idOfCountry = 4;
      const idOfCountry = currentSelectedCountry;
      const urlfetchCitiesInACountry = "https://localhost:7095/React/abcgetcities/" + idOfCountry;

      let responseCitiesInCountry = await axios.get(urlfetchCitiesInACountry);
      var listOfCitiesFromDB = responseCitiesInCountry.data;

      const extractIdAndNameOfCities = listOfCitiesFromDB.map( (anItem) => {
           return {id: anItem.id, cityName: anItem.cityName}
       }); 
      
       //Set dropdownlist data for cities for a specific country
       setCities(extractIdAndNameOfCities);

    }

    // Runs EVERY time the component renders - Beware of updateing the state of the component - continues loop of renders may occur
    useEffect( () => {
      console.log("useEffect in Personform run...");
      getDataAndPopulateDropdownList();
      
    }, [currentSelectedCountry, currentSelectedCity]);

    return (
        
        //Will invoke the handleSubmit function      
        <form onSubmit={ handleSubmit } className="form-control">
            <h2>Insert Person data</h2>

          <div className="form-group row">
            <label htmlFor="labelFirstName" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputFirstName" required  
              value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="labelLastName" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputLastName" required 
              value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="labelPhoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputPhoneNumber" required 
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>

          {/* <div className="form-group row">
            <label htmlFor="labelIdCountry" className="col-sm-2 col-form-label">ID Country(Testing)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputIdCountry" required min="0" max="200" 
              value={idCountry} onChange={(e) => setIdCountry(e.target.value)} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="labelIdCity" className="col-sm-2 col-form-label">ID City(Testing)</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputIdCity" required min="0" max="200" 
              value={idCity} onChange={(e) => setIdCity(e.target.value)} />
            </div>
          </div> */}


          {/* <div className="form-group row">
            <label htmlFor="labelCarSelect" className="col-sm-2 col-form-label">Car Select(Testing)</label>
            <div className="col-sm-10">
              <select name="cars" className="form-control" id="inputCarsSelected" required  
              value={carSelect} onChange={(e) => setCarSelect(e.target.value)}>
                {
                  carManufacturers.map(function(aCarManuFact){
                      return <option key={aCarManuFact.id} value={aCarManuFact.name}> {aCarManuFact.name} - Bil</option>
                })}                                        
              </select>
            </div>
          </div> */}


          <div className="form-group row">
            <label htmlFor="labelCountrySelect" className="col-sm-2 col-form-label">Country Select Droplist</label>
            <div className="col-sm-10">
              <select name="allcountries" className="form-control" id="inputCountryiesSelected" required  
              value={currentSelectedCountry} onChange={(e) => SetCurrentSelectedCountry(e.target.value)}>                                                                                                                                                                                                           
                <option value="disabled selected hidden">SELECT a COUNTRY</option>
                {
                  countries.map(function(aCountry){
                      return <option key={aCountry.id} value={aCountry.id}>{aCountry.countryName}</option>
                })}                                        
              </select>
            </div>
          </div>

          
          <div className="form-group row">
            <label htmlFor="labelCitySelect" className="col-sm-2 col-form-label">City Select Droplist</label>
            <div className="col-sm-10">
              <select name="allcities" className="form-control" id="inputCitiesSelected" required  
              value={currentSelectedCity} onChange={(e) => SetCurrentSelectedCity(e.target.value)}>
                <option value="disabled selected hidden">Select a City[After choosing a country]</option>
                {
                  cities.map(function(aCity){
                      return <option key={aCity.id} value={aCity.id}>{aCity.cityName}</option>
                })}                                        
              </select>
            </div>
          </div>
          <div>Selected country id {currentSelectedCountry}</div>
          <div>Selected city id {currentSelectedCity}</div>
          <input type="submit" value="Add a Person to ALL DBs" className="btn btn-primary" />
        </form>        
    )};

//Export our component so we can use it in other files
export default Personform;    