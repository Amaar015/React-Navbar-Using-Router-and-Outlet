import React, { useState } from 'react';
import {AiOutlineBars} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import { Outlet, Link } from "react-router-dom";
import './App.css';
const Layout = () => {
     const [click,setClick]=useState(false);
     return (
<div className='navbar'>
       <nav className='flexSB'>

            <ul className={click?'mobile-nav':'flexSB'} onClick={()=>setClick(false)}>

                    <li>
                    <Link to="/">Home</Link>
                      </li>
                    <li>
                      <Link to='/'>All Courses</Link></li>
                    <li><Link to='About'>About</Link></li>
                    <li><Link to='Contact'>Team</Link></li>
                    <li><Link to='Blogs'>Pricing</Link></li>
                    <li><Link to='Contact'>Journal</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                   
                    </ul> 
                    <div className='start'>
                                        <div className='button'>Get Certificate</div>
                                 </div>
                        <button className='toggle' onClick={()=>setClick(!click)}>
                             {click?<ImCross/>:<AiOutlineBars/>}

                        </button>
   
       </nav>
       <Outlet/>
  </div>
  )
}

export default Layout;


























// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="About">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/">Contact</Link>
//           </li>
//           <li>
//             <Link to="/nopage">Nopage</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;