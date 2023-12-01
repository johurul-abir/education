
import "./loginModal.scss";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const LoginModal = ({hide}) => {

  return (
    <>
    <div className="loginModal-blur">
        <div className="loginModal-repar">
            <div className="loginModal">
                <div className="card">
                    <div className="card-header model-header" style={{background: "#09A3DF"}} >
                        <h2>Login Form</h2>
                        <button onClick={() => hide(false)}> <IoClose/> </button>
                    </div>
                    <div className="card-body">
                        <div className="login-social">
                            <h3>login with social</h3>
                            <ul>
                                <li><a href="">  <FaFacebookF/></a></li>
                                <li><a href=""> <FaXTwitter /> </a></li>
                                <li><a href=""> <FaInstagram/> </a> </li>
                            </ul>
                        </div>

                        <div className="login-info">
                            <h3>login to your registered account!</h3>
                            <form action="">
                                <div className="login-item mt-2">
                                   <input type="text" name="phone" placeholder="Phone*" value="" className="form-control" />
                                </div>
                                <div className="login-item mt-2">
                                   <input type="text" name="pass" placeholder="Password*" value="" className="form-control" />
                                </div>

                                <div className="lost-pass mt-3">
                                    <label >
                                        <input type="radio" name="forget" value= {true} /> Remember Me
                                    </label>
                                    <a href="">Lost your password? </a>
                                </div>

                                <div className="login-item mt-3">
                                  <a href="" className="btn btn-info">Login</a>
                                </div>
                                <div className="form-footer">
                                    <p>Not a member yet?</p>
                                    <a href="">Register now</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginModal;