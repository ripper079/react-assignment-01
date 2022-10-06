import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from 'axios';

//Implementation of a 'controlled component'

// Start with UPPERCASE letter when naming react components
//The props is actually a function
function Personform(props) {    
    // console.log("Inside Personform react component!");
    const handleCreatePerson = props.addNewPersonToList;

    //UseState return an array of 2 elements, hook it up :)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [age, setAge] = useState(0);
    // const [nationality, setNationality] = useState("Default Nationality");
    // const [email, setEmail] = useState("Default@Email.se");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [idCountry, setIdCountry] = useState(0);
    const [idCity, setIdCity] = useState(0);

    const [carSelect, setCarSelect] = useState("ABC");
    const carManufacturers = [
      { id : 1, name: "volvo"},
      { id : 2, name: "bmw"},
      { id : 3, name: "fiat"},
  ];

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
    const [indexCurrentSelectedCountry, setIndexCurrentSelectedCountry]=useState(-1);

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

    //Press button - Send form (POST) data to DB
    const handleSubmit = (e) => {
        e.preventDefault();        
        console.log("Currently selected index" + indexCurrentSelectedCountry);

        //The actual data to be send, must match with corresponding action method in MVC app
        var payload = {
          fullName: firstName + " " + lastName,
          phoneNumber: phoneNumber,
          CountryId: idCountry,
          cityId: idCity
        };

        console.log("Payload data");
        console.log(payload);
        
        //This is the id of the country!!!! From droplist
        //console.log(currentSelectedCountry);

        console.log("Id of selected country");
        console.log(indexCurrentSelectedCountry);
                
        //handleCreatePerson(firstName, lastName, age, nationality, email);
        //Post to db server insteed

        axios.post("https://localhost:7095/React/addapesontodb", payload)        
        .then(function (response){
          console.log("Axios post...status=" + response.status);
          console.log(response);
        })
        .catch(function (error){

        });

        navigate("/personlist");        
    }

    let getDataAndPopulateDropdownList = async () => {
      console.log("Inside getDataAndPopulateDropdownList...");    

      let firstIdCountryInList = 0;

      //Get data(all countries) from db
      const urlfetchCountries = "https://localhost:7095/React/abcgetallcountries";
      let responseCountries = await axios.get(urlfetchCountries);
      console.log("Axios responese nr 1");
      console.log(responseCountries);

      var listOfCountriesFromDB = responseCountries.data;      
      firstIdCountryInList = listOfCountriesFromDB[0].id
      console.log("First id= " + firstIdCountryInList);

      const extractIdAndNameOfCountry = listOfCountriesFromDB.map( (anItem) => {
        return {id : anItem.id, countryName : anItem.countryName};
      });

      //Set the droplist data for countries
      setCountries(extractIdAndNameOfCountry);   


      //Get all data(all cities in a country)
      const urlfetchCitiesInACountry = "https://localhost:7095/React/abcgetcities/" + firstIdCountryInList;
      console.log("url to citriesincountry=" + urlfetchCitiesInACountry);
      let responseCitiesInCountry = await axios.get(urlfetchCitiesInACountry);
      console.log("Axios responese nr 2");
      console.log(responseCitiesInCountry);

      var listOfCitiesFromDB = responseCitiesInCountry.data;

      const extractIdAndNameOfCities = listOfCitiesFromDB.map( (anItem) => {
          return {id: anItem.id, cityName: anItem.cityName}
      }); 
      
      setCities(extractIdAndNameOfCities);

    }

    // Runs EVERY time the component renders - Beware of updateing the state of the component - continues loop of renders may occur
    useEffect( () => {
      console.log("useEffect in Personform run...");
      getDataAndPopulateDropdownList();

      // let firstIdCountryInList = -1;
      
      // const urlfetchCountries = "https://localhost:7095/React/abcgetallcountries";
      // axios.get(urlfetchCountries)
      // .then(function (response){
      //   // handle success
      //   console.log("Axios success in Personform - For Countries!!!");
      //   console.log(response);

      //   var listOfCountriesFromDB = response.data;
      //   firstIdCountryInList = listOfCountriesFromDB[0].id
      //   console.log("First id= " + firstIdCountryInList);
  
      //   const extractIdAndNameOfCountry = listOfCountriesFromDB.map( (anItem) => {
      //     return {id : anItem.id, countryName : anItem.countryName};
      //   });
        
      //   //Set the droplist data for countries
      //   setCountries(extractIdAndNameOfCountry);        
      // })
      // .catch(function (error){
      //   //Handle error
      // })
      // .then(function(){
      //   //always executes - ie cleanup resoureces
      // });

      // const urlfetchCitiesInACountry = "https://localhost:7095/React/abcgetcities/" + firstIdCountryInList;
      // //const urlfetchCitiesInACountry = "https://localhost:7095/React/getcities/" + "2";
      // console.log("fetchstring=" +urlfetchCitiesInACountry);
      // axios.get(urlfetchCitiesInACountry)
      // .then(function (response){
      //     // handle success
      //     console.log("Axios success in Personform - For Cities!!!");
      //     console.log(response);
      // })
      // .catch(function (error){
      //   //Handle error
      // })
      // .then(function(){
      //   //always executes - ie cleanup resoureces
      // });


    }, []);

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

          <div className="form-group row">
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
          </div>


          <div className="form-group row">
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
          </div>


          <div className="form-group row">
            <label htmlFor="labelCountrySelect" className="col-sm-2 col-form-label">Country Select Droplist</label>
            <div className="col-sm-10">
              <select name="allcountries" className="form-control" id="inputCountryiesSelected" required  
              value={currentSelectedCountry} onChange={(e) => {
                                                                SetCurrentSelectedCountry(e.target.value);
                                                                setIndexCurrentSelectedCountry(e.target.selectedIndex);
                                                              }}>
                {
                  countries.map(function(aCountry){
                      return <option key={aCountry.id} value={aCountry.id}> {aCountry.countryName} - COunTRy</option>
                })}                                        
              </select>
            </div>
          </div>

          
          <div className="form-group row">
            <label htmlFor="labelCitySelect" className="col-sm-2 col-form-label">City Select Droplist</label>
            <div className="col-sm-10">
              <select name="allcities" className="form-control" id="inputCitiesSelected" required  
              value={currentSelectedCity} onChange={(e) => SetCurrentSelectedCity(e.target.value)}>
                {
                  cities.map(function(aCity){
                      return <option key={aCity.id} value={aCity.id}> {aCity.cityName} - CIty</option>
                })}                                        
              </select>
            </div>
          </div>

          
          {/* <input type="submit" value="Add a Person" className="btn btn-primary" /> */}
          <input type="submit" value="Add a Person to ALL DBs" className="btn btn-primary" />
        </form>        
    )};

//Export our component so we can use it in other files
export default Personform;    