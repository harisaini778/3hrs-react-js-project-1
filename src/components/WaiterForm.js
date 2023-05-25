import CardElement from "./CardElement";
import React, {useState,useEffect} from "react";

const WaiterForm = () => {

    const [formData, setFormData] = useState({
       
        OrderId: "",
        price: "",
        dish: "",
        table: "Table-1"
    });

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            console.log(formData);
        }, 500)
        const storedFormData = localStorage.getItem("formData");
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
        return () => {
            clearTimeout(typingTimer);
        }
    }, []);

    const handleChange = (e) => {
      //  e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return ({
                ...prevFormData,
                [name]: value
            });
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form is submitted");
        console.log(formData);
        localStorage.setItem(formData.dish, JSON.stringify(formData));
        setFormData({
        OrderId: "",
        price: "",
        dish: "",
        table: "Table-1"  
        })
    }
    return (
        <>
            <CardElement>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label for="OrderId">Order Id : </label>
                        <input
                            id="OrderId"
                            type="number"
                            className="form-control"
                            name="OrderId"
                            value={formData.OrderId}
                            onChange={handleChange} />
                        
                        <label for="price">Choose Price : </label>

                        <input id="price"
                            type="number"
                            className="form-control"
                            name="price"
                            value={formData.price}
                            onChange={handleChange} />
                        
                        <label for="dish">Choose Dish : </label>

                         <input id="dish"
                            type="text"
                            className="form-control"
                            name="dish"
                            value={formData.dish}
                            onChange={handleChange} />
                        
                        <label for="table">Choose a table : </label>

                    <select className="form-control">
                            <option value="Table-1"> Table-1</option>
                        <option value="Table 2">Table-2</option>
                        <option value="Table-3">Table-3</option>
                    </select>
                    <button className="btn btn-primary" type="submit">Add to the list</button>
                </div>
                </form>
                </CardElement>
        </>
    );
}
export default WaiterForm;