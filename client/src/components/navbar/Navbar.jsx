import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className="flex items-center justify-between flex-wrap py-4 px-12 w-full borderGradientNav">
       
      <Link to='/'>

      <div>
        <span className="bg-gradient-to-r from-[#FE5F6E] via-[#923CFF] to-[#2B7CFF] text-transparent bg-clip-text text-xl font-semibold">DevBook</span>
      </div>

      </Link>

      <div className="w-4/12 px-2 rounded-xl gradient-border outline-none bg-[#1e1e1e]">
          <input
            className="w-full p-2 rounded-xl border-none outline-none bg-transparent"
            placeholder="Search"
            style={{ caretColor: "white" }}
          />
        </div>
    
        <Link to='/register'>
          <button className="px-8 py-2 borderGradientButton">
            <span className="bg-gradient-to-r from-[#923CFF] to-[#FE5F6E] text-transparent bg-clip-text">Register</span>
          </button>
        </Link>

    </nav>
  );
}

export default Navbar