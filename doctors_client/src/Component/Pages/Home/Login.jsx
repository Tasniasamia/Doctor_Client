import React, { useContext, useState } from 'react';
import { authdataall } from '../Shared/AuthProvider';
import pik from '../../../assets/undraw_doctor_kw5l.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from './Google';
const Login = () => {
    const[success,setSuccess]=useState(null);
    const[err,setErr]=useState(null);
    const receivedata=useContext(authdataall);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
const handlefunction=(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    receivedata.signin(email,password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        // const loguser={
        //     email:user.email
        // }
        // console.log(loguser);
        // fetch('http://localhost:8900/jwt',{
        //     method:"POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(loguser)
        // }).then(res=>res.json()).then(data=>{console.log(data);
        // if(data.token){
        //     localStorage.setItem('doctor-token',data.token)
        // }})
        setSuccess("User has submited successfully");
        setErr('');
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccess(" ");
        setErr(errorMessage);
      });
}
    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row items-center my-20 justify-between">
    <div className="text-center lg:text-left">
      <img src={pik} alt="login.img" className='img-fluid'/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ms-20">
      <form className="card-body"onSubmit={handlefunction}>
        <h2 className='text-center text-3xl font-extrabold'>Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email"name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confrim Password</span>
          </label>
          <input type="text" placeholder="password"name="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <h2 className='text-green-600'>{success}</h2>
        <h2 className='text-red-600'>{err}</h2>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign in</button>
        </div>

       
      </form>
      <h2 className='text-center my-5'style={{color:"gray"}}>Or Sign In with</h2>
        <Google></Google>
        <h2 className='text-center my-5'style={{color:"gray"}}>Have an Account?<Link to="/Resister"className='text-decoration-none text-blue-500'>Sign Up</Link></h2>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;