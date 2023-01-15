import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section id="blog">
                <div className="container text-center component-page-heading shadow my-5">
                    <h1>Articles Related to Jobs and Carrer Development</h1>
                </div>
            </section>

            <div className="container-fluid pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="media-body pl-3">
                                <h3 className="mb-2 text-dark">
                                    <NavLink to="/" className="media py-2 text-black">Basic Soft Skills required in a Workplace</NavLink></h3>
                                <div>
                                    <p className="tw-font-16 text-justify text-dark">Basic soft skills required in a workplace What are soft skills?Well, they are certain skillsets that you can develop in order to work moreharmoniously with other people. You can better with pract... <NavLink to="/">more</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="media-body pl-3">
                                <h3 className="mb-2 text-dark">
                                    <NavLink to="/" className="media py-2 text-black">Essential Employability Skills that will get you Hired!</NavLink>
                                </h3>
                                <div>
                                    <p className="tw-font-16 text-justify text-dark">Essential employability skills that will get you hired!Despite being really important, people tend to overlook some of these crucial skills that employers regard valuable while they take in their n... <NavLink to="/">more</NavLink></p>
                                </div>
                            </div>
                            <div className="media-body pl-3">
                                <h3 className="mb-2 text-dark">
                                    <NavLink to="/" className="media py-2 text-black">How to Avoid common Job-Interview Mistakes</NavLink>
                                </h3>
                                <div>
                                    <p className="tw-font-16 text-justify text-dark">Common Job-interview Mistakes and ways to Avoid them Job interviews are not to be taken too lightly.
                                        It’s more than just a simple conversation. You are being evaluated by the company if you are com...
                                        <NavLink to="/">more
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="media-body pl-3">
                                <h3 className="mb-2 text-dark">
                                    <NavLink to="/" className="media py-2 text-black">Festive Offer</NavLink>
                                </h3>
                                <div>
                                    <p className="tw-font-16 text-justify text-dark"> Festive Offer forVijaya Dashami &amp;amp; Tihar 2077Festive Offer DetailsPurchase 5 Job Units get 1 Top Job Unit freeOffers valid through November 20th, 2010 and payment must be made in full to receive fr...
                                    <NavLink to="/">more
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Blog;


