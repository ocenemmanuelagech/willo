import React from "react";
import { NavLink } from "react-router-dom";
import Willo1 from "./Willo1.png";
 
const Navigation = () =>{
    const Style={
        background:'darkgreen',
        color: 'white',
        pisition: 'fixed'
    }
    const align={
        alignContent:'right',
        marginLeft:'60%',
        padding:'1em'
    }
    return(
        <div style={Style}>
            <nav className='navbar navbar-expand-lg'>
            <img src={Willo1} alt = "" style={{height:'70px',width:'70px'}} />
            <h1>Willo Electronic market<br /><i style={{fontSize:"15px"}}>Your Trusted Electromarket</i></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <i className="fa fa-bars" style={{fontSize:'35px',color:'white'}}></i> 
             </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div style={align}>
                <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><NavLink to="/" > <button className="btn btn-secondary">Home</button> </NavLink></li>
            <li className="nav-item"><NavLink to="/contacts" ><button className="btn btn-success">Contacts</button></NavLink></li>
            <li className="nav-item"><NavLink to="/aboutus" > <button className="btn btn-success">Aboutus</button></NavLink></li>
            </ul>
                </div>
           
            </div>
            </nav>
        </div>
    );
}

export default Navigation;