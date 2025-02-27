import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Myjsonlanding() {
    const { id } = useParams();

    const [x, y] = useState([]);

    const myjsondata = () => {
        axios.get('http://localhost:4500/users').then((d) => {
            y(d.data);
        })
    }

    useEffect(() => {
        myjsondata();
    }, [])

    const mydel = (id) => {
        axios.delete('http://localhost:4500/users/' + id).then((d) => {
            console.log(d)
            myjsondata();
        })

    }

    return (
        <div className='container-fluid mt-5 cusmt'>
            <div className='row'>
                <div className='card shadow'>
                    <h4>Json server Data <Link to="addnewuser" className='btn btn-primary'>Add User</Link></h4>
                    
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">sno</th>
                                <th scope="col">userName</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Email id</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {x.map((d,s) => {
                                return (
                                    <tr>
                                        <th scope="row">{++s}</th>
                                        <td>{d.username}</td>
                                        <td>{d.phone}</td>
                                        <td>{d.email}</td>
                                        <td>{d.gender}</td>
                                        <td>
                                            <Link to={`view/` + d.id} className='btn btn-success btn-sm'>View</Link>
                                            <Link to={`edit/` + d.id} className='btn btn-info btn-sm ms-2'>Edit</Link>
                                            <button className='btn btn-danger btn-sm ms-2' onClick={() => mydel(d.id)}>Del</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myjsonlanding
