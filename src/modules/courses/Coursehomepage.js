import React from 'react'

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
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 text-center shadow'>
                    <h1>Welcome to course content</h1>
                </div>
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
    )
}

export default Coursehomepage
