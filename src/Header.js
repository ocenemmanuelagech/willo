import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//import 'bootstrap/dist/js/bootstrap.min.js';
function Header() {
    return (      

<div>
<h1 className="heading">Hallo, you are welcome really to this page</h1> 
<p>Please enter your email to receive news from our company</p>
<input type='email' placeholder='email'/> 
<p>Input your password</p>
<input type='password' placeholder="....."/>
<p>Please confirm</p>
<input type="checkbox" className="checkBox"/>
<p>Thanks</p>
<button className="btn btn-danger">Login</button>
</div>        
    );
  }  
  export default Header;