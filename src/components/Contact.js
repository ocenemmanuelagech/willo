import React from "react";
import "./Contact.css";



const Contact =()=>{
    return(
        <div className="contact">
            <h1>Contact</h1>
            <p>Address 11/7, Please make sure that you are there and in any case you can call: </p>
            <p>chrysostomedmond@gmail.com or call  0787656366</p>
            <p>You can also signup here</p>
            <p>Email</p>            
            <input type="text" className="form" placeholder="email" />
            <p>Password</p>
            <input type="password" className="form" placeholder="password" />
            <p></p>
            <button className="btn btn-success">Submit</button>
            <p>We shall get back to you. Please check your email.</p>
            
        </div>

    );
};
export default Contact;