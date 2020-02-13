import React from 'react';
import {Link,withRouter} from 'react-router-dom'
function Navbar (props){
  return (
     <nav>
        <div className="nav-wrapper" style={{background:"red"}}>
        <a href="#" className="brand-logo">Todo list</a>
        <ul id="nav-mobile" className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        </div>
  </nav>
  )
}

export default withRouter(Navbar);