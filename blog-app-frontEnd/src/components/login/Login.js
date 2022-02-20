import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';
import loginvalidation from './loginvalidation';
import Header2 from '../header/Header2';
import Home from '../home/Home';

function Login(props) {

    const [formValues1, setFormValues1] = useState({ email1:"", password1:"" });


    const [isSubmit1, setIsSubmit1] = useState(false);

    const handleChange1 = (event) => {
        const { name, value }= event.target;
        setFormValues1({...formValues1, [name]: value });
        console.log(formValues1);
    }

    const [formErrorValues1, setFormErrorValues1] = useState({});

    const handleSubmit1 = (event) =>{
        event.preventDefault();
        setFormErrorValues1(loginvalidation(formValues1));
        setIsSubmit1(true);
    }

    useEffect(()=>{
        if(Object.keys(formErrorValues1).length===0 && isSubmit1)  {
            alert("Login is Succesful");
        }
    }, [formErrorValues1]);
    
    return (
        <div>
            <Header2 />

            {Object.keys(formErrorValues1).length === 0 && isSubmit1 ? (<Home />) : (<pre className='pretext'>{JSON.stringify(formValues1, undefined, 2)}</pre>)}

            <div className="login">
                <div className="login-triangle"></div>
                    <h2 className="login-header">Log in</h2>
                        <form onSubmit={handleSubmit1} className="login-container">
                            <p><input type="email" name="email1" placeholder="Email" value={formValues1.email1} onChange={handleChange1} /></p>
                            <p className='error'>{formErrorValues1.email1}</p>
                            <p><input type="password" name="password1" placeholder="Password" value={formValues1.password1}  onChange={handleChange1} /></p>
                            <p className='error'>{formErrorValues1.password1}</p>
                            <button className='loginbutton'>Login</button>
                            <br></br>
                            <Link to="/signup" className="signuplink" >
                            Create an account? Signup
                            </Link>
                        </form>
            </div>
        </div>
    );
}

export default Login;