import React from 'react'
import {NavLink,withRouter} from "react-router-dom"

const Navbar = (props) => {
   
    return (
        <nav>
            <ul>
               <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
           </ul>
        </nav>
    )
}
export default withRouter (Navbar);