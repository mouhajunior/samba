import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import bar2 from '../images/bar2.jpeg'


const Pricing = () => {
  return (
    <div className="second" style={{marginTop:'15%'}}>
      <div className="row">
        <div className="col-md-4" style={{border:'none'}}>
          <Card className='textpricing' style={{background:'none', border:'none'}}>
            <img className='barprincing' style={{position:'absolute', height:'40px', width:'5px'}} src={bar2} alt=''/>
         <h2 style={{marginLeft:'5%'}}>Pricing</h2>
         <p style={{marginLeft:'5%'}}>Lorem Lorem Lorem Lorem lorem<br></br>Lorem Lorem Lorem Lorem lorem<br></br>Lorem Lorem Lorem Lorem Lorem </p>
          </Card>
        </div>
         <div className="col-md-4" style={{border:'none'}}>
          <Card className='advanced' style={{borderColor:'1px solid black',
            background:'#fff',
            boxShadow:'0 2px 2px',           
            width:'70%',
            marginLeft:'25%'
            }}
            >
            <p style={{ marginLeft:'3%', marginTop:'7%'}}>Advanced</p> <button style={{background:'#FFA500',border:'none' ,borderRadius:'10px',color:'white', width:'30%',float:'right',position:'absolute',left:'60%', top:'5%'}}>popular</button>
           <p  style={{marginLeft:'3%'}}> <b>$9.99</b>   Per month</p>
           <p style={{marginLeft:'3%'}}>Limited Factures</p>
           <p style={{marginLeft:'3%'}}>Limited Course</p>
           <p style={{marginLeft:'3%'}}>Limited Cloud Storage</p>
           <button style={{background:'orangered', width:'90%', marginLeft:'5%', borderRadius:'3px', color:'white', marginTop:'10%', marginBottom:'5%', border:'none', height:'40px'}}>Buy now</button>
          </Card>
        </div>
        <div className="col-md-4" style={{}}>
          <Card
            className="scard2 "
            style={{borderColor:'1px solid black',
            boxShadow:'0 2px 2px', 
           
            width:'70%'
            }}
            
          >
            <p style={{ marginLeft:'3%', marginTop:'7%'}}>Basic</p>
           <p  style={{marginLeft:'3%'}}> <b>$9.99</b>   Per month</p>
           <p style={{marginLeft:'3%'}}>Limited Factures</p>
           <p style={{marginLeft:'3%'}}>Limited Course</p>
           <p style={{marginLeft:'3%'}}>Limited Cloud Storage</p>
           <button style={{background:'orangered', width:'90%', marginLeft:'5%', borderRadius:'3px', color:'white', marginTop:'10%', marginBottom:'5%', border:'none', height:'40px'}}>Buy now</button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
