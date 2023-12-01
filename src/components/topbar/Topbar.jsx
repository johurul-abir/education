
import "./Topbar.scss"
import { Link } from 'react-router-dom';
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import LoginModal from "../loginModal/loginModal";
import { useState } from "react";

const Topbar = () => {
    const [login_modal, set_login_modal] = useState();
  return (
    <>
     {login_modal &&  <LoginModal hide={set_login_modal}/>}
     <div className="topbar">
            <div className="container top_box">
                <div className="top-con">
                    <div className="phone">
                        <ul>
                            <li> <CiPhone/> 01959609081</li>
                            <li> <CiPhone/> 01959609081</li>
                        </ul>
                    </div>
                    <div className="email">
                        <p> <HiOutlineMail/> studyhipe@gmail.com</p>
                    </div>
                    
                </div>

                <div className="top-reg">
                    <div className="top-btn">
                        <Link to="/register" className='btn-reg' > Register Now</Link>
                        <button  onClick={()=> set_login_modal(true)}> Login </button>
                    </div>
                   
                </div>
                
            </div>
        </div>
       
       
    </>
  )
}

export default Topbar