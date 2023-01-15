import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center">
                            WHO UNDERSTANDS IT'S PERSONAL? WE DO.</h1>
                            <p className="lead text-center fs-4 mb-5">TO USE IT'S 
                            ABOUT YOU Search, Apply & Get Jobs in Nepal - Free</p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/search jobs" className="btn btn-light me-4 rounded-pill px-4 py-2">Search Jobs</NavLink>
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contact</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
        
    );
}

export default Home;
