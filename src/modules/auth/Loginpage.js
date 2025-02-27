import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MdCastForEducation } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Loginpage() {
  const fst = 30;

  const { register, handleSubmit, formState: { errors } } = useForm()

  const myinputdata = (d) => {
    console.log(d);
  }

  const onclickhandler = () => {   //toastify //React icons size and color
    toast.info('Login Successfully....');
  }

  return (
    <form onSubmit={handleSubmit(myinputdata)}>
      <div className='container mt-5 p-5'>
        <div className='row justify-content-center'>
          <div className='col-md-3 bg-warning rounded shadow'>
            <div className='p-3 text-center'>
              <p className='h1 text-center mt-5 p-5'><MdCastForEducation size={150}/></p> 
            </div>
          </div>
          <div className='col-md-6 p-5 bg-info rounded shadow'>
            <div className='container-fluid'>
              <div className='row text-white'>
                <div className='col-12 text-center pb-2'>
                  <p style={{ textShadow: '2px 2px 5px black', fontSize: `${fst}px` }}>Welcome to Login Page</p>
                </div>
                <div className='col-12'>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" {...register("Email", { required: true })} />
                    {errors.Email && <p className='text-danger'>email is error</p>}
                  </div>
                </div>
                <div className='col-12'>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" {...register("Password", { required: true, minLength: 5 })} />
                    {errors.Password?.type === "required" && <p className='text-danger'>password is error</p>}
                    {errors.Password?.type === "minLength" && <p className='text-success'>minimun 5 character required</p>}
                  </div>
                </div>
                <div className='col-12 text-center'>
                  <div className="mb-3">
                    <button type="submit" className='btn btn-success shadow' onClick={onclickhandler}>Login</button>
                    <Link className='btn btn-outline-warning shadow ms-3' to='registor'>Registor</Link>
                    <Link className='btn btn-outline-danger shadow ms-3' to='landing'>Apps Landing Page</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position='top-right' />
      </div>
    </form>
  )
}

export default Loginpage
