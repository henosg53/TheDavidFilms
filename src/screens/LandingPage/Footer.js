import React from "react";
import { Link } from "react-router-dom";
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';


function Footer() {
  return (
    <div className="w-full flex flex-col items-center py-10 my-5">
      <div className="sw flex flex-wrap gap-20">

        <h2 className="w-full sm:w-auto dark:text-white">TheDavidFilms</h2>
        
        <div className="flex flex-col grow flex-1 gap-4">
          <p className="tracking-[2px] dark:text-white">PAGES</p>
          <div className="flex flex-col gap-0">
            <Link to="/aboutus"><p className="dark:text-white">About us</p></Link>
            <Link to="/blogs"><p className="dark:text-white">Blogs</p></Link>
            <Link to="/login"><p className="dark:text-white">Accounts</p></Link>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-4">
          <p className="tracking-[2px] dark:text-white">Find us</p>

          {/* Social Media Icons */}
          
          <div className="flex gap-3">
            <Link to="/" className="icon">
              <img alt='fb' src={facebook} />
            </Link>
            <Link to="/" className="icon">
              <img alt='t' src={twitter} />
            </Link>
            <Link to="/" className="icon">
              <img alt='I' src={instagram} />
            </Link>
          </div>
          <span><p>thedavidfilms@gmail.com</p></span>

        </div>
      </div>

      <hr className="sw mt-20" />
      
      <div className="flex sw py-10">
        <div className="flex-1 dark:text-white text-center">Copyright © 2022 FixerWithin. All Rights Reserved.</div>
        
      </div>
    </div>
  )
}

export default Footer;