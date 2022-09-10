// import "../styles/components/Navbar.scss"
import React from "react";
import { motion } from "framer-motion";
import {BrowserRouter, Link} from "react-router-dom";
import Testnav from "./Testnav";
function Navbar() {

      return (
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
          //   exit={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.6,
            }}
            className='header'>
            
            <div className='fixed'><Testnav /></div>
            <div className='header-inner'>
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
            </div>
          </motion.div>
        </div>
      );
    };
    
  export default Navbar;