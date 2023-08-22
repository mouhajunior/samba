import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import course from '../images/course.jpeg'
import record from '../images/record.jpeg'
import shed from '../images/shed.jpeg'
import expert from '../images/expert.jpeg'
import bar2 from '../images/bar2.jpeg'
const Courses = () => {
  return (
    <div className="third" style={{marginTop:'10%'}}>
      <div className="row">
        <div className="col-md-6" style={{border:'none'}}>
          <Card className='whychoose' style={{background:'none', border:'none'}}>
            <img className='barwhy' style={{position:'absolute' ,height:'90px'}} src={bar2} alt=''/>
            <h2 className='wh' style={{marginLeft:"5%"}}>Why chose <br></br>e-learn</h2>
            <p className='lorco' style={{marginTop:'3%'}}>loremloremloremloremloremloremloremlorem<br></br>loremloremloremloremloremloremloremlorem<br></br>loremloremloremloremloremloremlorem</p>
          </Card>
        </div>
        
        <div className="col-md-3" style={{}}>
          <Card
            className="scard "
            style={{border:'none',
            background:'none'
            }}
          >
           <img className='coursesaccess' style={{width:'12%'}} src={course} alt=''/> 
      <h3>Course Accessibility</h3>
      <p>loremloremloremloremlorem<br></br>loremloremloremlorem<br></br>loremloremloremlorem    </p>
      <img className='coursesaccess' style={{width:'12%',marginTop:'18%'}} src={record} alt=''/> 

      <h3 style={{}}>Record sessions</h3>
      <p>loremloremloremloremlorem<br></br>loremloremloremlorem<br></br>loremloremloremlorem    </p>

          </Card>
        </div>
        <div className="col-md-3" style={{}}>
          <Card
            className="scard "
            style={{border:'none',
            background:'none'
            }}
            
          >
            <img className='coursesaccess' style={{width:'12%'}} src={shed} alt=''/>
      <h3>Schedule learning</h3>
      <p>loremloremloremloremlorem<br></br>loremloremloremlorem<br></br>loremloremloremlorem    </p>
      <img className='coursesaccess' src={expert} style={{marginTop:'18%', width:'12%'}} alt=''/>
      <h3 style={{}}>Export instructions</h3>
      <p>loremloremloremloremlorem<br></br>loremloremloremlorem<br></br>loremloremloremlorem    </p>

          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
