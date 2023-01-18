import React, { useEffect } from 'react';
import axios from 'axios';
import ErrorText from '../component/ErrorText';
import { FaSignInAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
   
    const [name,setName]= useState("");
    const [email,setEmail] =useState("");
    const[password, setPassword] = useState("");
    const[role, setRole] = useState("");

    const navigate = useNavigate();

    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        role:"",
        is_checked: true
    });

    const [errors, setErrors] = useState({});

   function handleSubmit(event) {
      console.log(event.preventDefault());
      
      let {name,   email, password, role} = data

      axios.post('${process.env.REACT_APP_SERVER_URL}/users/signup',{
        name,
        email,
        password,
        role,
    })
      .then(function (response){
            navigate("/login");
      })
      .catch(function(error){
        console.log(error?.response?.data?.errors);

        setErrors({})

        errors?.response?.data?.errors?.forEach(el =>{
               
            setErrors((prev_errors)=>{
                return{
                    ...prev_errors,
                    [el.param] : el.msg
                }
            })
        })

      })
      

   }
      
   function handleChange(e){

    const{name, value} = e.target
     console.log("result",name,value);
     setData({
        ...data,
        [name]:value
     })
     setErrors({
        ...errors,
        [name]:"",
     })

   }



    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center 
                     text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder ">
                            Hello!
                        </h1>
                        <p className="lead text-center">
                            Enter Your Credentials To Signup
                        </p>
                        <h5 className="mb-4 text-white">OR</h5>
                        <NavLink to="/login" className="btn btn-light  text-primary rounded-pill pb-2 w-50">
                            <i><FaSignInAlt /> </i>
                            Login
                        </NavLink>
                    </div>


                    <div className="col-md-6 p-5 ">
                        <section id="login">
                            <h1 className="display-6 fw-bolder mb-5 text-center shadow my-5">
                                Signup</h1>
                            <p className="text-base text-gray-100 font-thin leading-normal my-2">
                            </p>
                        </section>

                        <form onSubmit={handleSubmit}>
                            
                            <div className="mb-3">
                                <label for="name" className="form-label required">Name</label>
                                <input type="name" className="form-control" name="name" id="name"
                                    onChange={handleChange} value={data.name}
                                    aria-describedby="emailHelp" />
                                
                                <ErrorText errors={errors}
                                    field="name"
                                    data={data} />

                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label required">Email address</label>
                                <input type="email" className="form-control" name="email" id="email"
                                    onChange={handleChange} value={data.email}
                                    aria-describedby="emailHelp" />
                                <ErrorText errors={errors}
                                    field="email"
                                    data={data} />

                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label required">Password</label>
                                <input type="password" className="form-control" id="password"
                                    name="password" onChange={handleChange} value={data.password}
                                />
                                <ErrorText errors={errors}
                                    field="password" data={data} />
                            </div>
                            <div className="mb-3">
                                <label for="role" className="form- required">Role</label>
                                <select className="form-select" value={data.role} name="role" onChange={handleChange} aria-label="Default select example">
                                    <option calue="/">Select</option>
                                    <option value="JobSeeker">JobSeekeer</option>
                                    <option value="Company">Company</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="is_checked" className="form-check-label required">Agree Terms & Conditions</label>
                                <input type="checkbox" onChange={handleChange} name="is_checked" id="is_checked"           
                                                          checked={data.is_checked} />
                            </div>
                            <NavLink type="submit" className="btn btn-primary w-100">Signup</NavLink>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Signup;
