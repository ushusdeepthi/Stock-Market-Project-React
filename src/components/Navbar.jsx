import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return ( 
        <nav className="navbar border-bottom">
        <Link to="/">Home</Link>
  
        <Link to="/crypto/">Crypto</Link>
  
        <Link to="/currencies/">Currencies</Link>
  
        <Link to="/indexes/">Indexes</Link>
  
        <Link to="/markets/">Markets</Link>
      </nav>
    );
}
