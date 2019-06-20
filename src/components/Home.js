import React from "react";
import Powerbank from './pics/powerbank.jpg'
import Accer from './pics/apple.jpg'
import Technopovia from './pics/technopovia.jpg'
import Laptop from './pics/laptop1.jpg'
import Samsung from './pics/samsung.jpg'
import Mac from './pics/macbook.jpg'
import Repair from './pics/recover.jpg'
const Home =()=>{
    const styling = {
        border: '2px solid darkgreen',
        margin: '10px 10px',
        borderRadius: '1rem',
        marginTop:'2px'     
    }
    const img = {
        height: "150px",
        width: "90px",
        marginLeft:'40%',
         
    }
    const divhead={
        textAlign:'center',
        fontWeight:'bold',
        color:'darkgreen'
    }
    return(
        <div>
            <div style = {styling}>
            <div className ="row">
             <div className="col-md-12" style={{marginLeft:'4%'}} >
                <h1>You are welcome to Willo electrostore</h1>
                <p>Get your favourite high quality items from the willo store and get it at instant!</p>
                <ol type ='a'>
                    <li>Smart phones</li>
                    <li>Laptops</li>
                    <li>Food Items</li>
                    <li>Course works</li>
                    <li>Research and Proposals</li>
                    
                </ol>
             </div>
       </div>
              
        </div>
        <div style={styling}>
            <div className='row'>
            <div className='col-md-12'>
                <h2 style={divhead}><u>Smart Phones</u></h2>
            </div>
            <div className="col-md-4"  >
            <img src={Powerbank} style={img}alt = ''/>
            <h4 style = {divhead}> Power banks </h4>
            <p>60W Powerbank for 5-7 successful charges of phones, long life of power bank. </p>
            <p>UGX 80K</p>
            <button className="btn btn-success" style={{marginLeft:'30%'}}>Buy Now</button><p></p>
            </div>
            <div className="col-md-4"  >
            <img src={Accer} style = {{height:'150px',width:'150px',marginLeft:'32%'}} alt = ''/>
            <h4 style ={divhead}>Apple phones </h4>
            <p>Iphone s6" High resolution Hd 1080p screen, Long battery life. 32GB ROM,1Gb RAM</p>
            <p>UGX 1.5M</p>
            <button className="btn btn-success" style={{marginLeft:'30%'}}>Buy Now</button><p></p>
            </div>
            <div className="col-md-4"  >
            <img src={Technopovia} style = {{height:'150px',width:'150px',marginLeft:'32%'}} alt = ''/>
            <h4 style ={divhead}>Technopovia </h4>
            <p>Iphone s6" High resolution Hd 1080p screen, Long battery life. 32GB ROM,1Gb RAM</p>
            <p>UGX 800K</p>
            <button className="btn btn-success" style={{marginLeft:'30%'}}>Buy Now</button><p></p>
            </div>
            <div className='col-md-12'>
                <h2 style={divhead}><u>Laptops</u></h2>
            </div>
            <div className="col-md-4"  >
            <img src={Laptop} style = {{height:'150px',width:'150px',marginLeft:'32%'}} alt = ''/>
            <h4 style ={divhead}>HP Mini  </h4>
            <p>HP Mini 12" HD screen, 2Gb RAM, 300GB Hard Drive, DVD ROM, Long battery life, intel duo core processor</p>
            <p>UGX 900K</p>
            <button className="btn btn-success" style={{marginLeft:'30%'}} >Buy Now</button><p></p>
            </div>

            <div className="col-md-4"  >
            <img src={Samsung} style = {{height:'150px',width:'210px',marginLeft:'26%'}} alt = ''/>
            <h4 style ={divhead}>Samsung </h4>
            <p>Samsung pro 1236 16,5" HD screen, 2Gb RAM, 300GB Hard Drive, DVD ROM, Long battery life, intel corei3 processor</p>
            <p>UGX 1.8M</p>
            <button className="btn btn-success" style={{marginLeft:'30%'}} >Buy Now</button><p></p>
            </div>

            <div className="col-md-4"  >
            <img src={Mac} style = {{height:'150px',width:'190px',marginLeft:'30%'}} alt = ''/>
            <h4 style ={divhead}> Apple Laptop </h4>
            <p>Macintosh 1236 16,5" HD screen, 8Gb RAM, 500GB Hard Drive, DVD ROM, Long battery life, intel corei5 processor</p>
            <p>UGX 3.8M</p>
            <button className="btn btn-success" style={{marginLeft:'30%'}} >Buy Now</button><p></p>
            </div>
            <div className="col-md-12">
                <h2 style={divhead}><u>Repair and computer mainteinance Services, spares</u></h2>
                <img src={Repair} alt='' className='image-fluid' style = {{height:'200px',width:'300px',marginLeft:'35%'}} />
                <p style={{textAlign:'center'}}>Hardware Repair and maintenance, computer spare parts, technical advices, network installation, for Phones, tablets, network devices, WiFi failure troubleshooting, bulk sms, Printer Repair and installation, configuring of DSTv, GOTv, Startimes
                and Computer Graphics and 3D animation</p>
                <button className="btn btn-success" style={{marginLeft:'40%'}} >Order Now</button><p></p>
            </div>
                 
            </div>
            
        </div>
        </div>

        
        
    );
};
export default Home;