import { Link, Outlet, useLocation } from "react-router-dom";
import './Admin.scss';
import { MdSpaceDashboard } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoBagSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";





const Admin = () => {

 

  const location = useLocation();
  return (
    <>
      <div className="admin">
        <div className="row">
          <div className="col-md-3">
            <div className="admin_menu">
              <div className="logo">
                <h2>StudyHipe Adimn</h2>
                <hr />
              </div>
              <div className="admin_menu_part">
                <ul>

                  <li><Link to="dashboard" className={location.pathname==="/admin/dashboard" ? "active":""}> <MdSpaceDashboard/> Dashboard </Link></li>

                  <li><Link to="course" className={location.pathname==="/admin/course" ? "active":""}> <MdCastForEducation/> Course </Link></li>

              
                  <li className="exam_toggle ">
                    <Link to=""> <FaPen/> Model Test Exam </Link>
                      <ul className="exam"> 
                        <li className="bcs"> <FaUserGraduate/> BCS
                          <ul className="bcs-list">
                            <li className="bcs-list-item"> <Link to=""> Add new</Link> </li>
                            <li className="bcs-list-item"> <Link to=""> All questions</Link> </li>
                          </ul>
                        </li>
                        <li><Link href=""> <FaLandmark/> University Admission</Link></li>
                        <li><Link href=""><IoBagSharp/> Primary Job</Link></li>
                        <li><Link href=""> <FaRegUser/> HSC Academic</Link></li>
                        <li><Link href=""><BiUser/> SSC Academic</Link></li>
                      </ul>
                  </li>
                  
                  <li>
                    <Link to="team" className={location.pathname==="/admin/team" ? "active":""} > <HiUserGroup/> Team </Link>
                  </li>

                  <li>
                    <Link to="student" className={location.pathname==="/admin/student" ? "active":""} > <PiStudentFill/> Create Student </Link>
                  </li>

                  <li>
                    <Link to=""> <FaUserTie/> Create Teacher </Link>
                  </li>

                  <li><Link to=""> <BsFillPostcardFill/> Create Blog </Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Outlet/>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Admin