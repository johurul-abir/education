
import './register.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import Alert  from "../../components/Alert/Alert";
import { toast } from 'react-toastify';

const Register = () => {
  const [input, setInput] = useState({
    name: " ",
    phone: "",
    class_type: "",
    gender: "",
    pass: "",
  });

  const inputHandler = (e) => {
    setInput((prevState)=>({
      ...prevState, [e.target.name] : e.target.value
    }))
  }


    //form submit state
//const [submit, setsubmit] = useState()

  const [formAlert, setformAlert] = useState({
    status: false,
    type: "danger",
    msg: "all field are required!!",
  });


  const formHeandler = (e) => {
    e.preventDefault();
    if(input.name ==="" || input.phone ==="" || input.pass===""){
      // setformAlert({
      //   status:true,
      //   msg:"all field are required!!",
      //   type:"danger",
      // })
      toast.error("All field are required!!")
    } else{
      setInput({
        name: " ",
        phone: "",
        class_type: "",
        gender: "",
        pass: "",
      })
      toast.success("Data stabel")
      // setformAlert({
      //   status:true,
      //   msg:"data stable",
      //   type: "success"

      // })
      

    }
    

  }



  return (
   <>
  
    <div className="createnew">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
              <div className="card">
                <div className="card-header" style={{background: "#09A3DF"}}>
                  <h2>Register Now</h2>
                </div>
                <div className="card-body">
                
                  <div className="student_form">       
                    <div className="scioalMedia">
                      <h3>With Social Media</h3>
                      <ul>
                        <li> <FaFacebookF/> </li>
                        <li> <FaXTwitter/> </li>
                        <li> <FaInstagram/> </li>
                      </ul>
                    </div>

                    <div className="ByForm">

                      {formAlert.status && <Alert type={formAlert.type} hide={setformAlert} children ={formAlert.msg} />}

                        <form onSubmit={formHeandler}>

                            <div className="item">
                              <label htmlFor="">Name</label>
                              <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>

                            <div className="item mt-3">
                              <label htmlFor="">Phone No</label>
                              <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>
                            
                            <div className="item mt-3">
                            <select name="class_type" id="" className='form-control' onChange={inputHandler}>
                              <option value="">-select-</option>
                              <option value="Admission">Admission</option>
                              <option value="HSC">HSC</option>
                              <option value="SSC">SSC</option>
                              <option value="Job">Job</option>
                            </select>
                            </div>

                            <div className="item mt-3">
                              <p>Choose your gender</p>
                              <label >
                                <input type="radio" name='gender' value="Male" onChange={inputHandler} /> Male
                              </label>

                              <label>
                                <input type="radio" name='gender' value="Female" onChange={inputHandler} /> Female
                              </label>
                          
                            </div>


                            <div className="item mt-3">
                              <label htmlFor=""> Password</label>
                              <input type="text" className="form-control" name='pass' value={input.pass} onChange={inputHandler} />
                            </div>

                            <div className="item mt-3">
                              <input type="submit" className='btn btn-info' value="Register" />
                            </div>
              

                        </form>
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

export default Register