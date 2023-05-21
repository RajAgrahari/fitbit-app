import {useState} from 'react';
import {Link,NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';
import {links} from '../data.js';
import {GoThreeBars,GoX} from 'react-icons/go';
import './navbar.css';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
           <div className="container nav_container">
               {/* Logo */}
              <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo"/>
              </Link>
              {/* NavLinks */}
              <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                 {
                    links.map((link,key)=>{
                        return (
                            <li key={key}>
                                <NavLink to={link.path} className={({isActive}) => isActive?'active-nav':''} onClick={()=>setIsNavShowing((prev) => (!prev))}>
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    })
                 }
              </ul>
              {/* NavButtons */}
              <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing? <GoX/>:<GoThreeBars/>
                }

              </button>
               
           </div>
        </nav>
    )
}

export default Navbar;