import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [theme,setTheme] = useState("light")
  const [menuDisplay,setMenuDisplay] = useState("h-0");
  const [open,setOpen] = useState("");

  useEffect(()=>{
    if(theme === "dark")
      document.documentElement.classList.add("dark")
    else
      document.documentElement.classList.remove("dark")
  },[theme])

  const handleTheme = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Menu Links
  const Links = [
    <Link key='1' to="/blogs">Blogs</Link> ,
    <Link key='1' to="/products">Products</Link> ,
    <Link key='2' to="/aboutus">About us</Link>,
    <Link key='3' to="/login" className="btn-sty1 my-4 text-blue-600">Login/Register</Link>,
    
  <span ><label class="inline-flex relative items-center cursor-pointer">
      <input onClick={handleTheme} type="checkbox" value="" class="sr-only peer"/>
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
      </label></span>

  ]  
  // Menu Opener
  function handleMenu() {
    setOpen(open === "open" ? "" : "open");
    setMenuDisplay(open === "open" ? "max-h-0" : "max-h-[100%]");
  }


  return (
    <div className="flex flex-col items-center dark:bg-black dark:text-white">
      
      {/* Nav Header */}
      <div className="sw py-3 flex justify-between items-center z-20 ">
        <Link to="/"><h3 className="">TheDavidFilms</h3></Link>
        <div className="sm:hidden ">
          <label className={"menu-btn "+open} onClick={handleMenu}><span></span></label>
        </div>
        <div className="hidden sm:flex gap-10 items-center">
          {[...Links]}
        </div>
      </div>

      {/* Nav Header For Mobile View */}
      <div className={"absolute shadow-xl shadow-black/30 bg-white  w-full flex justify-center overflow-hidden transition-all sm:hidden "+menuDisplay}>
        <div className="sw pt-14 flex justify-end text-black z-10 dark:bg-white">
          <div className="flex flex-col py-4 gap-6 text-right ">
            {[...Links]}
            
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Navbar;