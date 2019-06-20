
import React from "react";
import Willo from './Willo1.png';
import Repair from './pics/repair1.jpg';
import Phone from './pics/phone.jpg';
import Computers from './pics/laptopBrands.jpg'
const AboutUs =()=>{
    const container={
        background: 'darkgreen', 
        border:'3px solid white',
        borderRadius:"2rem",
        color: 'white',
        fontSize: '20px'
    }
    return(
        <div style = {container}>
             <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <img src={Willo} alt='' className='image-fluid'/>
                <h1>Willo ElectroStore and Shop</h1>
                   <p>We are an Electronic store that deals in the sale of Electronic and food items both in northern Uganda and Nation wide.</p>
                </div>
                <div className = 'col-md-6'>                    
                    <p>Order for a service of your Computer, electronics from our experienced service Engineers and technocrats</p>
                    <img src = {Repair} className ='image-fluid' alt ='' />
                </div></div>
               <div style={{background:'white',color:'darkgreen', borderRadius:'2rem'}} className='row'>
               <div className='col-md-4'>
                    <h5>These are the products that we deal in</h5>
                    <ul><li>Food items</li><li>Scholastics</li><li>Laptops</li><li>Phones</li></ul>
                </div>
                <div className='col-md-4'><p>Get all that you want on our online market!</p></div>
                <div className='col-md-4'><p>The center of trusted and locally wanted items. you can market, buy and sell your goods and services here</p></div>
                <div className='col-md-6'>
                    <img src={Phone} alt='' style={{marginLeft:'30%'}} className='image-fluid' />
                    <p style={{textAlign:'center'}} >All kinds of Smart phones that are latest releases. Wellook for ward to you getting one for your self!</p>
                </div>  
                <div className='col-md-6' >
                    <img src={Computers} alt='' style={{marginLeft:'30%'}} className='image-fluid'  />
                    <p style={{textAlign:'center'}} >All kinds of Laptops, Accer that are latest releases. We look for ward to you getting one for your self!</p>
                </div>              
                <p style={{textAlign:'center'}}>Please <a href ='http://localhost:3000' target='_blank' rel="noopener noreferrer">click here</a> to enter our market of items! Nice shopping.</p>
                
                </div> 
                      
        </div>

        </div>
       

    );
};
export default AboutUs;