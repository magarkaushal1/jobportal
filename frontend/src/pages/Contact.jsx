import React from 'react';
import {FaPaperPlane} from 'react-icons/fa'
const Contact = () => {
    return (
        <div>   
            <section id ="contact">
                <div className="container component-page-heading  text-center shadow my-5">
                  <h1>Contact</h1>
                  <p className="text-base text-gray-100 font-thin leading-normal my-2">

                  </p>
                </div>
            </section>
                   <div className="container component-page-heading shadow my-5">
                      <div className="row mb-5">
                        <div className="col-12">
                  
                     <h1 className="display-6 text-center mb-4">Have Some Questions?</h1>
                            <hr className="w-25 mc-auto" />
                      </div>   
    
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/about.jpg" alt="contact" className="w-75" />       
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div class="mb-3">
                                    <label for="name" class="form-label">
                                        Your Name
                                    </label>
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">
                                        Email Address
                                    </label>
                                    <input type ="email" class="form-control" id="exampleFormControlInput1" placeholder="email@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">
                                        Your Message
                                    </label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5">

                                    </textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
                                    Send Message
                                  <i className="fa fa-paper-plane ms-2"> <FaPaperPlane/></i>   </button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Contact;
