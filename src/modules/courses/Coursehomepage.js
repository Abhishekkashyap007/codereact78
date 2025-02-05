import React, { Fragment, useEffect, useState } from 'react'

const mycourse = [
    {
        coursename: "MERN",
        coursefees: 5000
    },
    {
        coursename: "MEAN",
        coursefees: 4000
    },
    {
        coursename: "JAVA",
        coursefees: 50000
    },
    {
        coursename: "EXCEL",
        coursefees: 2000
    }
];


function Coursehomepage() {

    const [a,b]=useState([])

    const getmylocaldata=()=>{
        const getmydata= JSON.parse(localStorage.getItem("mylocaldata"));
        b(getmydata)
    }
    useEffect(()=>{
        getmylocaldata();
    })
    
    return (
        <Fragment>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 text-center shadow'>
                    <h1>Welcome to course content</h1>
                </div>
                {a.map((gd) => {
                    return (
                        <div className='col-md-3 text-center shadow'>
                            <div className='card bg-info p-3 mt-5'>
                                <h3>{gd.price}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='row'>
                {mycourse.map((c) => {
                    return (
                        <div className='col-md-3 text-center shadow'>
                            <div className='card bg-info p-3 mt-5'>
                                <h3>CourseName:{c.coursename}</h3>
                                <h2>Fees:{c.coursefees}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </Fragment>
    )
}

export default Coursehomepage
