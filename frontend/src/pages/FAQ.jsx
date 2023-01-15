import React from 'react';
import { FcPlus } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const FAQ = () => {
    return (
        <div>
            <section id ="FAQ">
                <div className="container component-page-heading  text-center shadow my-5">
                  <h1>Frequently Asked Question</h1>
                  <p className="text-base text-gray-100 font-thin leading-normal my-2">

                  </p>
                </div>
            </section>
            <div className="container-fluid py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex align-items-center">
                                <NavLink data-toggle="collapse" to="/" role="button" aria-expanded="false">
                                    <i className="fc-fc-plus"></i>
                                    <FcPlus/>
                                </NavLink>
                                <p class="pl-2 m-0 font-medium text-gray-700 leading-relaxed">
                                    What is HamroSansar.com ?
                                </p>
                            </div>
                            <div className="collapse show">
                                <div className="card-body pt-1 pb-1 pl-4">
                                    <h5 className="font-hairline text-gray-600">
                                    HamroSansar.com is an online common platform for both Jobseekers and Company within Nepal. 
                                    Jobseekers can place multiple resumes, search jobs, apply online and do much more. 
                                    Company can benefit by keeping the profile of their company/organization, posting their job vacancies, 
                                    and search for suitable candidates among resume posters by qualification, experience, and expertise.      
                                    </h5>

                                </div>

                            </div>
                            <div className="d-flex align-items-center">
                                <NavLink data-toggle="collapse" to="/" role="button" aria-expanded="false">
                                    <i className="fc-fc-plus"></i>
                                    <FcPlus/>
                                </NavLink>
                                <p class="pl-2 m-0 font-medium text-gray-700 leading-relaxed">
                                    What is HamroSansar.com ?
                                </p>
                            </div>
                            <div className="collapse show">
                                <div className="card-body pt-1 pb-1 pl-4">
                                    <h5 className="font-hairline text-gray-600">
                                    HamroSansar.com is an online common platform for both Jobseekers and Company within Nepal. 
                                    Jobseekers can place multiple resumes, search jobs, apply online and do much more. 
                                    Company can benefit by keeping the profile of their company/organization, posting their job vacancies, 
                                    and search for suitable candidates among resume posters by qualification, experience, and expertise.      
                                    </h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FAQ;
