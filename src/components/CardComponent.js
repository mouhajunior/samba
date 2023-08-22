import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import slack from '../images/slack.jpeg'
// import mocrosoft from '../images/mocrosoft.jpeg'
// import facebook from '../images/facebook.jpeg'
import groupe from '../images/groupe.jpeg'


const CardComponent = () => {
  return (
    <div className="second" style={{marginTop:'15%'}}>
      <div className="row">
        <div className="col-md-3" style={{border:'none'}}>
          <Card className='h23' style={{background:'none', border:'none'}}>
           <h2 className='h24'>23,000 +</h2>
           <p className='h24'>Active students</p>
          </Card>
        </div>
         <div className="col-md-3" style={{border:'none'}}>
          <Card className='courses' style={{background:'none', border:'none'}}>
           <h2 className='h24'>2000 +</h2>
           <p>Courses</p>
          </Card>
        </div>
        <div className="col-md-6" style={{}}>
          <Card 
            className="scard "
            style={{border:'none',
            background:'none',
            
            }}
            
          >
         <p className='h24'>Trusted by 23 , 000 +happy Students are <br></br>joining with us for achieve their goal</p>
         <p>also featured in</p><br></br>
         {/* <img style={{width:'12%'}} src={slack} alt=''/>  <img style={{width:'12%'}} src={mocrosoft} alt=''/> <img style={{width:'12%'}} src={facebook} alt=''/>  */}
          <img className='imagegroupe' style={{width:'50%'}} src={groupe} alt=''/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
