
import { Link } from 'react-router-dom';
import './HscScience.scss';
import { TbMathIntegralX } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md";
import { GiDna2 } from "react-icons/gi";
import { TbNetwork } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
const HscScience = () => {
  return (
    <>
    <div className="hsc-science">
      <div className="container">

        <div className="subject-wise-video">
          <h2 className="subject-wise-video-title">Subject wise videos </h2>
          <div className="video-link-area">

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <TbMathIntegralX/> </i>
                      <Link><h6>Higher Matmatics</h6></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <GiMaterialsScience/> </i>
                      <Link><h6>Physics</h6></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <MdOutlineScience/> </i>
                      <Link><h6>Chemistry</h6></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <GiDna2/> </i>
                      <Link><h6>Biology</h6></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <TbNetwork/> </i>
                      <Link><h6>ICT</h6></Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <RiEnglishInput/> </i>
                      <Link><h6>English</h6></Link>
                    </div>
                  </div>
                </div>
              </div>

             


              
          </div>
        </div>

        <div className="online-batch">
          <h2>Online Batch</h2>
          <p>Every where every place learn with top Teacher complete your sylebus</p>
            
           <div className="online-all-batches">

           <div className="batch-item">
              <div className="card">
                <div className="card-body batch-content">
                  <div className="batch-left">
                    <div className="left-content">
                      <h3>HSC-2025 (Physics, Chemistry, H.Math & Biology)</h3>
                      <h6> <span> <FaBook/> </span> 8 Subjects</h6>
                      <p><i> <RiLiveFill/> </i> 12 live classes per week </p>
                      <button className='btn btn-info'>Show more</button>
                    </div>
                  </div>
                  <div className="batch-right">
                    <img src="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="batch-item">
              <div className="card">
                <div className="card-body batch-content">
                  <div className="batch-left">
                    <div className="left-content">
                      <h3>HSC-2025 (Physics, Chemistry, H.Math & Biology)</h3>
                      <h6> <span> <FaBook/> </span> 8 Subjects</h6>
                      <p><i> <RiLiveFill/> </i> 12 live classes per week </p>
                      <button className='btn btn-info'>Show more</button>
                    </div>
                  </div>
                  <div className="batch-right">
                    <img src="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="batch-item">
              <div className="card">
                <div className="card-body batch-content">
                  <div className="batch-left">
                    <div className="left-content">
                      <h3>HSC-2025 (Physics, Chemistry, H.Math & Biology)</h3>
                      <h6> <span> <FaBook/> </span> 8 Subjects</h6>
                      <p><i> <RiLiveFill/> </i> 12 live classes per week </p>
                      <button className='btn btn-info'>Show more</button>
                    </div>
                  </div>
                  <div className="batch-right">
                    <img src="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

           </div>




        </div>

      </div>
    </div>
    </>
  )
}

export default HscScience