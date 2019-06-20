import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
 
class About extends Component{       
    
    render(){
        
        return(
             <BrowserRouter>
             <div>
             <Navigation />
             
             <Switch>
            <Route path="/" component= {Home} exact/>
            <Route path="/contacts" component ={Contact}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route component = {Error} />
            </Switch>            
            <Footer/>
             </div>         
            
             </BrowserRouter>
               
        );
    }
}
export default About;