const CardElement = (props) => {
    return (
        <div className="card container w-75"
            style={{
                border: "1px solid",
            marginTop:"15px"}}>
        <div className="card-body">
        {props.children}
            </div>
            </div>
    );
}
export default CardElement;