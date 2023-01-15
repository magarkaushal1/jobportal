import React from 'react';
import { FaBuilding, FaSignInAlt, FaUserPlus, FaUserTie } from "react-icons/fa"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

let activeStyle={
    fontSize:"1.2em",
}
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg-dark navbar-light shadow  ">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active "aria-current="page" to="/" 
                                style={({isActive})=>
                                 isActive ? activeStyle : undefined
                            } 
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"
                                style={({ isActive})=>
                                  isActive ? activeStyle : undefined
                                }>Search Job</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about"
                                style={({isActive})=>
                                   isActive ? activeStyle : undefined
                            }>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services"
                                style={({isActive})=>
                                isActive ? activeStyle:undefined
                                }>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog"
                                style={({isActive})=>
                                isActive ? activeStyle:undefined
                                }>Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact"
                                style={({isActive})=>
                                isActive ? activeStyle:undefined
                                }>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/FAQ"
                                style={({isActive})=>
                                isActive ? activeStyle:undefined
                                }>FAQ</NavLink>
                            </li>
                             
                        </ul>
                    
                        <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
                            <i className="fa fa-user-plus me-2"><FaSignInAlt /></i> Login</NavLink>
                             
                            <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                                <i classname="fa fa-user-plus me-2" aria-hidden="true"><FaUserPlus/></i> Signup </NavLink>

                   
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
