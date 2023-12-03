
import { Link, useLocation } from 'react-router-dom';
import  './Header.scss'




const Header = () => {
  const location = useLocation();
 

  return (
    <>
       <nav className="shadow">
        <div className="container">
           <div className="row">
            <div className="col-md-3">
                  <div className="logo">
                      <a href="/">
                          <img src="https://studyhipe.com/wp-content/uploads/2023/10/cropped-logo-1-300x70.png" alt="logo" />
                      </a>
                  </div>
              </div>

              <div className="col-md-9">
                  <div className="navbar">
                    <ul>
                      <li className='navitem '><Link to="/" className={location.pathname==="/" ? "active" : ""} >Home</Link></li>
                      
                      <li className='navitem'><Link to="/hsc" className={location.pathname==="/hsc" ? "active" : ""}>HSC</Link></li>

                      <li className='navitem'><Link to="/course" className={location.pathname==="/course" ? "active" : ""}>Course</Link></li>

                      <li className='navitem'><Link to="/team" className={location.pathname==="/team" ? "active" : ""}>Team</Link></li>
                      <li className='navitem'><Link to="/about" className={location.pathname==="/about" ? "active" : ""}>About</Link></li>
                      <li className='navitem'><Link to="/contact" className={location.pathname==="/contact" ? "active" : ""}>Contact</Link></li>
                      <li className='navitem'><Link to="/blog" className={location.pathname==="/blog" ? "active" : ""}>Blog</Link></li>
                      
                    </ul>
                  </div>
              </div>
           </div>
        </div>
       </nav>
   

    </>
  )

}

export default Header