function PersonDataLine(props){    
    return (
        // <div className="row" key={ props.apersonrecord.id }>

        <div className="row">
            <div className="col">{ props.apersonrecord.id } </div>
            <div className="col">{ props.apersonrecord._firstName } </div>        
            <div className="col">{ props.apersonrecord._lastName }</div>
            <div className="col">{ props.apersonrecord._age }</div>
            <div className="col">{ props.apersonrecord._nationality }</div>
            <div className="col">{ props.apersonrecord._email }</div>   
                             
        </div>
    )};

export default PersonDataLine;
