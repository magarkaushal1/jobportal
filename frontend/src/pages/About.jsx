import React from 'react';

const About = () => {
    return (
        
        <div>           
           <section id ="about">
                <div className="container component-page-heading  text-center shadow my-5">
                  <h1>About US</h1>
                  <p className="text-base text-gray-100 font-thin leading-normal my-2">

                  </p>
                </div>
            </section>
                <div className="container shadow my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/about.jpg" alt="About"
                            className="w-75 mt-5"/>
                        </div>
                        <div className="col-md-6" >
                            <h5 className="display-6 mb-2 front-weight-normal py-2">WHO WE ARE</h5>
                            <hr className="w-50" />
                            <p className="lead mb-4">Welcome to HamroSansar.com, the largest locally focused employment website in the nation! 
                            Our mission is to lead the Internet employment industry in Nepal by providing innovative information, 
                            superior resume management software and a comprehensive selection of services.
                            HamroSansar.com offers services to the recruiting and job-seeking community in Nepal. 
                            We are the only recruitment service provider with 100% free service to all the jobseekers.</p> 
                            <h5 className="py-2">It is our mission to bring the burgeoning Nepalese Internet and computing 
                            talent to bear on international Web development.</h5><strong>Jai Nepal!</strong>
                        </div>
                    </div>
                </div>

        </div>
    
    );
}

export default About;
