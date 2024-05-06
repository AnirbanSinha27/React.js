import React,{useState} from "react";

function MyComponent(){

    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState();
    const [shipping,setShipping]=useState("");
    
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

    const handleQuantityChange=(e)=>{
        setQuantity(e.target.value);
    }

    const handleCommentChange=(e)=>{
        setComment(e.target.value);
    }

    const handlePaymentChange=(e)=>{
        setPayment(e.target.value);
    }

    const handleShippingChange=(e)=>{
        setShipping(e.target.value);
    }

    return(
        <>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea placeholder="Enter delivery comment" value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="Select an option">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Rupay">Rupay</option>
            </select>
            <p>Payment via: {payment} </p>

            <label>
                <input type="radio" value="PickUp"  name="shippingMethod" onChange={handleShippingChange}/>PickUp
            </label><br />
            <label>
                <input type="radio" value="Delivery" name="shippingMethod" onChange={handleShippingChange}/>Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    );
}

export default MyComponent