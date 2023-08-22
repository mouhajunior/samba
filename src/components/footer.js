import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="row" style={{}}>
      <div className="col-md-6" style={{}}>
          <Card
            className="scard "
            style={{border:'none',
            background:'none',
            
            }}
            
          >
         <form style={{marginTop:'15%', marginLeft:'10%', background:'#fff', boxShadow:'0 1px 5px 1px', width:'70%',borderRadius:'5px'  }}>
            <h5 style={{marginTop:'5%', marginLeft:'3%'}}>Become a member</h5>
            <p style={{marginLeft:'3%'}}>Get install Access to 4500 Courses</p>
            <input type='text' style={{width:'93%', marginLeft:'3%', height:'40px'}} placeholder='Full name'/>
            <br></br>
            <input style={{marginTop:'4%', width:'93%', marginLeft:'3%', height:'40px'}} type='email' placeholder='Email adress'></input>
            <br></br>
            <select style={{marginTop:'4%', width:'93%', marginLeft:'3%', height:'40px'}} placeholder='Select'>
              <option>
                Select learning program
              </option>
              <option>
              Python
              </option>
              
            </select><br></br>
            <input  type='textarea' style={{height:'70px', marginTop:'4%', width:'93%', marginLeft:'3%'}} placeholder='Detail information'>
            </input><br></br>
            <button  style={{marginTop:'4%',width:'97%', marginLeft:'2%',marginBottom:'5%', border:'none', background:'#CC9D42', color:'white', height:'40px'}} >Request information</button>
           
          </form>
          </Card>
        </div>
        <div className="col-md-6" style={{border:'none'}}>
          <Card style={{background:'none', border:'none'}}>
            <h1 className='take2' style={{marginTop:'10%'}}>Take great online <br></br>Courses from anywhere<br></br>in the world</h1>
            <p className='take2'>lorem ipsum lorem ipsum lorem ipsum <br></br>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br></br>lorem ipsum lorem ipsum lorem ipsum </p>
          </Card>
        </div>
       
      </div>
      </footer>
  );
};

export default Footer;
