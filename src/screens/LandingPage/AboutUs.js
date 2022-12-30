import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


function AboutUs() {
  return (
    <div className="w-full flex justify-center">
      <div className="sw flex flex-col">

       


        {/* Company Description */}
        <div className="flex flex-row-reverse flex-wrap justify-between ">
          <div className="flex-col sm:scale-125 flex justify-center mt-24">
            <h2>About TheDavidFilms</h2>
            <div className="py-4">We are TheDavidFilms.We are TheDavidFilms.We are TheDavidFilms.<br></br>
            We are TheDavidFilms.We are TheDavidFilms.We are TheDavidFilms.<br></br>
            We are us.We are us.We are us.We are us.</div>
            
          </div>

          {/* Quality Assurance */}
          <div className="flex-1 flex flex-col justify-center  mt-24 ">
            <p className="text-center">Welcome</p>
            <h2 className="">Service Quality</h2>
            <div className="py-4">We hope to deliver services you desire</div>
            <p className="py-4 list-sty1 flex flex-col gap-2">
              <li>Affordable prices</li>
              <li>Quality multimedia products</li>
              <li>24/7 Services</li>
            </p>
           
          </div>
          
        </div>
        <div className="w-full flex justify-center py-10 my-10">
      <div className="sw flex items-center flex-wrap">

        {/* Big Header */}
        <div className="flex-1 flex flex-col gap-3 px-10">
          <p className="uppercase">Contact us</p>
          <h2>Join Our Community</h2>
          <p>Email: thedavidfilms@gmail.com</p>

          
        </div>

        <div className="flex-1 flex flex-col gap-4 my-10">
          
               <h4 className="text-center">Comments or Suggestions?</h4>
              <div className="card-sty1 min-w-[300px] quote flex-col bg-black dark:bg-black">
                <div className="p-1">
                  <input placeholder="Your name"/> <input type='email' placeholder="Your Email"/>
                </div>
                <div className="p-4" >
                  <textarea className="" placeholder="Leave your comments or suggestions...." cols='50' rows='5'></textarea><br/>
                  <Link to='/' className="btn-sty-1 my-5  rounded-r bg-slate-200">Submit</Link>
                </div>
                
              </div>  
          </div>
          
         
      </div>
      
    </div>

        <Footer/>
        
      </div>
    </div>
  )
}

export default AboutUs;