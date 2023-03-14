import CardBody from "./CardBody";

const Card = ({children}) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            {children}
            <CardBody>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go somewhere</button>
            </CardBody>
        </div>
    );
}

export default Card;