
import './Course.scss';
import { Coursedata } from '../../faker/Course';
import Modeltest from '../modeltest/Modeltest.jsx';

const Course = () => {
  return (
    <>
                <div className="course">
                   <div className="container">
                      <h3>Our Populer Course</h3>
                        <div className="divider"></div>

                      <div className="batch">
                        {
                            Coursedata.map((item, index) => {
                                return(
                                
                                    <div className="card shadow course_card" key={index}>
                                    <div className="card-body">
                                        <div className="batch_item">
                                            <span>{item.type}</span>
                                            <h2>{item.title}</h2>
                                            <h5>{item.subtitle}</h5>
                                            <p>Class time: {item.time}</p>
                                            <a href=""><button className='btn btn-info'> Enroll Now </button></a>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                )
                            })
                        }
                            
                      </div>
                   </div>
                </div>
            <Modeltest/>
    </>
  )
}

export default Course