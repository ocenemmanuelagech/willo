import React,{Component} from 'react';
 import Smile from "./pics/smile.png";

class Footer extends Component{
    render(){
        const foot = {
            background:'black',
            opacity: '1',
            color: 'white',
            fontSize:'14px',
            position: 'relative',
            marginBottom: '0%',
            borderRadius: "2rem"
        }
        const icon={
            
            fontSize:'35px',
            backgroundColor:'white',
            padding:'1.5 em',             
            borderRadius:'2rem',
            textAlign:'center',
                  
        }
        return(
            <div style={foot}>
                <footer>
                <div className = 'row'>
                    <div className='col-md-4'>
                        <p style ={{textAlign:'center'}} >Thanks for visiting us</p>
                        <img src={Smile} alt='' style = {{height:'80px',width:'80px',marginLeft:'20%'}} /> Hope you liked us
                    </div>
                    <div className='col-md-4'>
                        <p>You can connect with us through our social media platforms</p>
                      <div style= {icon}>
                      <a href="http://www.facebook.com" target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook"></i></a> 
                  <a href="http://www.twitter.com" target='_blank' rel="noopener noreferrer"><i className="fa fa-twitter"></i></a> 
                  <a href="http://www.google.com" target='_blank' rel="noopener noreferrer"><i className="fa fa-google"></i></a> 
                  <a href="http://www.linkedin.io" target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                  <a href="http://www.youtube.com" target='_blank' rel="noopener noreferrer"><i className="fa fa-youtube"></i></a> 
                  <a href="http://www.whatsappchatt2343.com" target='_blank' rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
                  <a href="http://www.instagram.com" target='_blank' rel="noopener noreferrer" ><i className="fa fa-instagram"></i></a>
                  <a href="http://www.snapchat.com" target='_blank' rel="noopener noreferrer"><i className="fa fa-snapchat"></i></a>
                      </div>
                    </div>
                    <div className='col-md-4'>
                        <p>Thanks, hope to see you again!</p><p>We hope to see you in the business</p>
                        <p>Send us an email: Just go to top and click on contacts to find our email platform. Register and lets get moving on.</p>
                    </div>
                </div>
                </footer>
               
            </div>

        )
    }
}

export default Footer;
