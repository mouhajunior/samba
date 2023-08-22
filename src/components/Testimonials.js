import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import premier from '../images/premier.jpeg'
import deuxieme from '../images/deuxieme.jpeg'
import bar2 from '../images/bar2.jpeg'
import cinp from '../images/cinq.jpeg'
import six from '../images/six.jpeg'

const Testimonials = () => {
  return (
    <div className="second" style={{marginTop:'15%'}}>
                  <img className='bartesti' style={{position:'absolute', height:'49px', width:'5px'}} src={bar2} alt=''/>

        <h1 className='test' style={{marginBottom:'5%', marginLeft:'2%'}}>Testimonials</h1>
      <div className="row">
        <div className="col-md-6" style={{border:'none'}}>
          <Card style={{background:'#fff', border:'none', boxShadow:'0 2px 2px', marginBottom:'4%'}}>
            <img src='' alt=''/>
            <img style={{width:'7%', borderRadius:'15px', marginLeft:'5%'}} src={premier} alt=''/>
            <img className='cinpjohn' style={{position:'absolute', height:'px', width:'40px',top:'-17%'}} src={cinp} alt=''/>
           <p style={{marginLeft:'2%', marginTop:'4%'}}><b>John brollins</b> mywebsite.com</p>
           <p style={{marginLeft:'3%'}}>loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem vlorem lorem lorem lorem lorem lorem lorem lorem lorem  </p>
           <img className='six' style={{width:'40px' ,position:'absolute',top:'95%',left:'92%'}} src={six} alt=''/>
          </Card>
        </div>
         <div className="col-md-6" style={{border:'none'}}>
          <Card style={{background:'#fff', border:'none', boxShadow:'0 2px 2px', marginBottom:'4%'}}>
            <img src='' alt=''/>
            <img style={{width:'7%', borderRadius:'15px', marginLeft:'5%'}} src={deuxieme} alt=''/>
            <img className='cinpjohn' style={{position:'absolute', height:'px', width:'40px',top:'-17%'}} src={cinp} alt=''/>
          <p style={{marginLeft:'2%', marginTop:'4%'}}><b>Dave inau</b> mywebsite.com</p>
           <p style={{marginLeft:'3%'}}>loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem vlorem lorem lorem lorem lorem lorem lorem lorem lorem  </p>
           <img className='six' style={{width:'40px' ,position:'absolute',top:'95%',left:'92%'}} src={six} alt=''/>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
