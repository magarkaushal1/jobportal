import React from 'react';
import {FcBusinessman, FcPicture,FcSpeaker} from "react-icons/fc"
const Services = () => {
    return (
        <div>
        <section id ="services">
                <div className="container component-page-heading text-center shadow my-5">
                  <h1>Our Services</h1>
                  <p className="text-base text-gray-100 font-thin leading-normal my-2">

                  </p>
                </div>
            </section>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4"> We Are Here To Give You..! </h1>
                            <hr className="w-25 mx-auto"/>
                            
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3" >
                                <div className="card-body text-center">
                                <i className="icon-user-tie tw-text-2xl tw-p-1 "></i>
                                <FcBusinessman size="4em"/>   
                                <h5 class="card-title">Direct Recuitment</h5>
                                    <p class="card-text">
                                    The purpose of this procedure is to identify the direct recruitment
                                     and selection process for employing staffs a...
                                    </p>
                                <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-primary me-4 rounded-pill px-4 py-2">Explore</button>
                            </div>

                                </div>
                            </div>
                        
                        </div>
                
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-image fa-4x mb-4 text-primary"></i>
                                    <FcPicture size="4em"/>
                                    <h5 class="card-title"> Banner Advertisement</h5>
                                    <p class="card-text">
                                   Online website banner ads provide an instant global reach at relatively low cost... 
                                    </p>
                                    <div className="buttons d-flex justify-content-center">
                                    <button className="btn btn-primary me-4 rounded-pill px-4 py-2">Explore</button>
                            </div>

                                </div>

                            </div>
                        </div>
                
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-speaker fa-4x mb-4 text-primary"></i>
                                    <FcSpeaker size="4em"/>
                                    <h5 class="card-title">Vacancy Announcement</h5>
                                    <p class="card-text">
                                    JobsNepal vacancy announcements are the means by which an organization advertises its vacancies on our...
                                    </p>
                                    <div className="buttons d-flex justify-content-center">
                                    <button className="btn btn-primary me-4 rounded-pill px-4 py-2">Explore</button>
                            </div>

                                </div>

                            </div>
                        </div>
                    
                    </div>
                </div>
       </div>
    );
}

export default Services;
