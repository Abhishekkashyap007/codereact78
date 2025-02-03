import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Mylandingpage() {
    return (
        <div className='container mt-3 apps'>
            <div className='row justify-content-center'>
                <div className='col-md-12 p-5 bg-info rounded shadow'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p className='h2'>Welcome to Application List</p>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className='col-md-3 mt-5 text-center'>
                                <Link to='payment'>
                                <div className="card p-3 shadow rounded rounded-circle">
                                    <p className='h1 text-center'><FaRupeeSign/></p>
                                    <div className="card-body">
                                        <h5 className="card-title">Payment</h5>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mylandingpage
