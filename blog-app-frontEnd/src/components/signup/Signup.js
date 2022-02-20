import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import './Signup.css';
import validation from './validation';
import Login from '../login/Login';
import Header2 from '../header/Header2';



function Signup(props) {

  const [formValues, setFormValues] = useState({ username:"", email:"", password:"" });

  const handleChange = (event) => {
    const { name, value }= event.target;
	setFormValues({...formValues, [name]: value });
	console.log(formValues);
}

  const [isSubmit, setIsSubmit] = useState(false);

const [formErrorValues, setFormErrorValues] = useState({});

const handleSubmit = (event) =>{
	event.preventDefault();
	setFormErrorValues(validation(formValues));
	setIsSubmit(true);
}

useEffect(()=>{
	if(Object.keys(formErrorValues).length===0 && isSubmit)  {
		alert("Signup is Succesful");
	}
}, [formErrorValues]);

    return (
        <div>

        <Header2 />

            {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login/>) : (<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>)}
            
              <div className="signup">
                <div className="signup-triangle"></div>
                  <h2 className="signup-header">Sign up</h2>

                    <form onSubmit={handleSubmit} className="signup-container">
                      <input type="text" name="username" placeholder="Username"  required="" value={formValues.username} onChange={handleChange}/>
                      <p className='error'>{formErrorValues.username}</p>
                      <input type="email" name="email" placeholder="Email" required=""  value={formValues.email} onChange={handleChange} />
                      <p className='error'>{formErrorValues.email}</p>
                      <input type="password" name="password" placeholder="Password"  required=""  value={formValues.password}  onChange={handleChange}/>
                      <p className='error'>{formErrorValues.password}</p>
                      {/* <Link to="/login" className="loginlink" > */}
                      <button className='signinbutton'>Sign up</button>
                      {/* </Link> */}
                      <br></br>
                      <Link to="/" className="loginlink" >
                        Already have an Account? Login
                      </Link>
                    </form>
              </div>
          </div>
    );
}

export default Signup;