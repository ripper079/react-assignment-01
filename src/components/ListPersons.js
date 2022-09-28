import PersonDataLine from './PersonData';

// Start with UPPERCASE letter when naming react components
//const ListAllPersons = () => {    //Alt 1
// Start with UPPERCASE letter when naming react components
function ListAllPersons(props) {         //Alt 2 
    // console.log("Inside ListAllPersons react component!");
    const persons = props.listOfAllPersons;
    const countPersonInList =  persons.length;

    if (countPersonInList === 0)
        return (<div>There are no entries</div>);

    return (        
        <div className="container-fluid">
            <div className="row">
                <div className="col"><strong>List ID</strong></div>
                <div className="col"><strong>FirstName</strong></div>
                <div className="col"><strong>LastName</strong></div>
                {/* <div className="col"><strong>Age</strong></div>
                <div className="col"><strong>Nationality</strong></div>
                <div className="col"><strong>Email</strong></div>   */}
                {/* Assignment react routes               */}
                <div className="col"><strong>Action</strong></div>
            </div>

                    
            {persons.map((e) => ( 

                // Mini bug - each child have a unique prop, assignment requirement
                // <PersonDataLine apersonrecord={e} />
                <PersonDataLine key={e.id} apersonrecord={e} />

                
                //Maybe this better??? Toogle between 2 versions
                // <div className="row" key={e.id}>
                //         <div className="col">{ e.id } </div>
                //         <div className="col">{ e._firstName } </div>
                //         <div className="col">{ e._secondName }</div>
                //         <div className="col">{ e._age }</div>
                //         <div className="col">{ e._nationality }</div>
                //         <div className="col">{ e._email }</div>                                            
                // </div>


            ))}                                                                                    
       </div>               
    )};

//Export our component so we can use it in other files
export default ListAllPersons; 