import React, { Fragment } from 'react'
import Headerpage from '../shares/Headerpage'
import Footerpage from '../shares/Footerpage'
import { FaRupeeSign } from "react-icons/fa";

function Feeslandingpage() {
    return (
        <Fragment>
            <Headerpage />
            <div className='mainpage' style={{ marginTop: "0px", minHeight: "85vh" }}>
                <div className='container mt-5 apps1'>
                    <div className='row'>
                        <div className='col-md-3 p-5 r '>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center bg-info">UPI</h5>
                                    <h1 className='text-center'>45k<FaRupeeSign size={25} color='skyblue' /></h1>
                                    <p className="card-text text-center">Real-Time Payments Convenient and Easy to Use Secure and Regulated Widespread Adoption and Integration</p>
                                    <button type="button" className="btn btn-outline-primary btn-block">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-5 '>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center bg-warning">VISA</h5>
                                    <h1 className='text-center'>23k<FaRupeeSign size={25} color='yellow' /></h1>
                                    <p className="card-text text-center">Real-Time Payments Convenient and Easy to Use Secure and Regulated Widespread Adoption and Integration</p>
                                    <button type="button" className="btn btn-outline-warning btn-block">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-5 '>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center bg-info">PayPal</h5>
                                    <h1 className='text-center'>23k<FaRupeeSign size={25} color='skyblue' /></h1>
                                    <p className="card-text text-center">Real-Time Payments Convenient and Easy to Use Secure and Regulated Widespread Adoption and Integration</p>
                                    <button type="button" className="btn btn-outline-primary btn-block">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-5 '>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center bg-warning">Cash</h5>
                                    <h1 className='text-center'>45k<FaRupeeSign size={25} color='yellow' /></h1>
                                    <p className="card-text text-center">Real-Time Payments Convenient and Easy to Use Secure and Regulated Widespread Adoption and Integration</p>
                                    <button type="button" className="btn btn-outline-warning btn-block">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footerpage />
        </Fragment>
    )
}

export default Feeslandingpage
