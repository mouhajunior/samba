import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import learnmarketing from '../images/learnmarketing.jpeg'
import learnmusic from '../images/learnmusic.jpeg'
import learnbusiness from '../images/learnbusiness.jpeg'
import learncoding from '../images/learncoding.jpeg'
import art from '../images/art.jpeg'
import bar from '../images/bar.jpeg'
const Avaibles = () => {
  return (
    <div className="four justify-content-center" style={{marginTop:'10%', marginBottom:'10%'}}>
      <div className="row" style={{background:'rgb(15, 32, 21, 0.958)', height:'480px'}}>
        <div className="col-md-3" style={{border:'none'}}>
          <Card style={{background:'none', border:'none', marginLeft:'25%',}}>
            <img style={{width:'4px', position:'absolute' ,top:'20%', marginRight:'3%'}} src={bar} alt=''/>
           <h3 style={{marginTop:'19%', color:'white', marginLeft:'10%'}}>Avaibles<br></br>Courses</h3>
           <p style={{color:'white'}}>lorem lorem lorem lorem <br></br>lorem lorem lorem lorem <br></br>lorem lorem lorem lorem     </p>
          </Card>
        </div>
         <div className="col-md-3" style={{border:'none'}}>
          <Card style={{background:'none', border:'none'}}>
          <img className='learnc' style={{marginTop:'90%', width:'60%', borderRadius:'7px', marginLeft:'40%'}} src={learncoding} alt=''/>

          </Card>
        </div>
        <div className="col-md-3" style={{}}>
          <Card
            className="scard "
            style={{border:'none',
            background:'none'
            }}>
                <img  className='ima1' style={{marginTop:'15%', width:'60%', borderRadius:'7px'}} src={learnmarketing} alt=''/>
            <img className='leranmusic' style={{marginTop:'15%', width:'60%', borderRadius:'7px'}} src={learnmusic} alt=''/>

       
          </Card>
        </div>
        <div className="col-md-3" style={{}}>
          <Card
            className="scard "
            style={{border:'none',
            background:'none'
            }}>
         <img className='art' style={{marginTop:'15%', width:'60%', borderRadius:'7px', float:'left', marginLeft:'-40%'}} src={art} alt=''/>
         <img className='learnbussiness' style={{marginTop:'15%', width:'60%', borderRadius:'7px', marginRight:'20%' , marginLeft:'-40%'}} src={learnbusiness} alt=''/>


          
       
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Avaibles;
