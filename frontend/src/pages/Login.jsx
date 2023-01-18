import React, { useState } from 'react';
import Alert from "../component/Alert";
import ErrorText from '../component/ErrorText';
import { FaUserPlus } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import axios from "axios";
import {login, logout, setUser} from '../redux/reducer/auth';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] =useState("");
    const[password, setPassword] = useState("");


    const navigate =useNavigate();
     const [data,setData] =useState({
        email:"",
        password:"",
        is_checked: true
     });

  const [ errors, setErrors] = useState({});

  function handleSubmit(event){
    console.log(event.preventDefault());
    
    axios.post('${ process.env.REACT_APP_SERVER_URL}/users/login',{
        email,
        password,
    }) 
        .then(function(response){
            localStorage.setItem("access_token",response.data.access_token)
            dispatch(login())
            navigate("/")
        })
        .catch(function (error){
            setErrors({
                status:"danger",
                msg:error?.response?.data?.msg
            })
        })
  }

function handleChange(e) {
    const {name, value} = e.target
    console.log("result",name, value);
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
                            Welcome Back
                        </h1>
                        <p className="lead text-center">
                            Enter Your Credentials To Login
                        </p>
                        <h5 className="mb-4 text-white">OR</h5>
                        <NavLink to="/register" className="btn btn-light  text-primary rounded-pill pb-2 w-50">
                        <i><FaUserPlus/> </i>
                            Register
                        </NavLink>
                    </div>
                               
            
                    <div className="col-md-6 p-5 ">
                        <section id="login">
                        <h1 className="display-6 fw-bolder mb-5 text-center shadow my-5">
                            LOGIN</h1>
                            <p className="text-base text-gray-100 font-thin leading-normal my-2">
                             </p>
                        </section>
                        <form onSubmit={handleSubmit}>
                            {
                                errors.msg && errors.status
                                && 
                                <Alert errors = {errors} />
                            }
                            <div className="mb-3">
                                <label for="email" className="form-label required">Email address</label>
                                <input type="email" className="form-control" name="email" id="email" 
                                onChange={handleChange} value={data.email}
                                aria-describedby="emailHelp" />
                                <ErrorText errors={errors}
                                field="email"
                                data={data}
                                />
  
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label required">Password</label>
                                <input type="password" className="form-control" id="password" 
                                name="password" onChange={handleChange} value={data.password} 
                                />
                                <ErrorText errors={errors}
                                field="password" data={data} />
                            </div>
                            <div>
                                    <label htmlFor="is_checked" className="form-check-label required">Agree Terms & Conditions</label>
                                    <input type="checkbox" onChange={handleChange} className="" name="is_checked" id="is_checked" 
                                    checked={data.is_checked}/>
                            </div>
                            <NavLink type="submit" className="btn btn-primary w-100">Login</NavLink>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Login;
