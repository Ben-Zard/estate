// import "../styles/components/Navbar.scss"
import React from "react";
import { motion } from "framer-motion";
import { Link} from "react-router-dom";
function Navbar() {

      return (
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
        //   exit={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}
          className='header bg-red-500' >
          <div className='header-inner'>
            <div className='logo bg-red-500'>Luram</div>
            <nav className='nav'>
            <li><Link to='/contact'>1</Link></li>
              <li>
                <a href='/strategy'>2</a>
              </li>
              <li>
                <a href='/cases'>3</a>
              </li>
              <li>
                <a href='/about'>4</a>
              </li>
              <li>
                <a href='/why'>5</a>
              </li>
            </nav>
            <div className='contact bg-red-500'>
              <a href='/contact'>MAIN</a>
            </div>
            <div className='hamburger-menu'>
              <span></span>
              <span></span>
            </div>
          </div>
        </motion.div>
      );
    };
    
  export default Navbar;