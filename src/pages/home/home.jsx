
import './home.scss';

import banner_img from "../../assets/images/banner.jpg"
import Course from '../../components/course/Course';
import Team from "../team/Team"
import Support from '../../components/support/Support';
import StudentReview from '../../components/student review/StudentReview';



const Home =()=>{


   return(<>
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner_left">
                            <div className="banner_content">
                                <h1>Admission going on SSC & HSC new Batch </h1>
                                <h5>According to 2023 slybus Educatation system</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium veniam ipsam animi iure. Quibusdam voluptatem expedita a quisquam quae.</p>
                                <a href=""><button className='btn btn-info'>Admission Now</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="banner_right">
                            <img src={banner_img} alt="" />
                        </div>
                    </div>
                </div>

                
            </div>
           
        </div>
        <br />
        <br />
        <Course/>
        <Support/>
        <Team/>
        <StudentReview/>
    
    </>) 
}

export default Home