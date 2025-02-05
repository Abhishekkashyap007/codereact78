import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Payhomepage() {
    const [mydata, myupdatedata] = useState([])

    // const myapi = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
    //         console.log(d.data);
    //         myupdatedata(d.data)
    //     })
    // }
    const myapi = () => {
        fetch('https://fakestoreapi.com/products').then((d) => {
            return d.json();
        }).then((myd) => {
            console.log(myd);
            myupdatedata(myd);
        })
    }


    useEffect(() => {
        myapi();
    }, [])

    return (
        <div>
            Call API in React js
            <input type="button" value="call api" onClick={myapi} />
            <div className='container'>
                <div className='row'>
                    {mydata.map((m) => {
                        return (
                            <div className='col-md-4 mt-3'>
                                {m.id>=50 ?
                                <div className="card bg-info">
                                    <div className="card-body">
                                        <h5 className="card-title">{m.id}</h5>
                                        <h5>{m.title}</h5>
                                        <img src={m.image} alt='skjkd' className='img-fluid'/>
                                        <p className="card-text">{m.body}</p>
                                        <Link to={"detailspage/"+m.id} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                                :<div className="card bg-warning">
                                <div className="card-body">
                                    <h5 className="card-title">{m.id}</h5>
                                    <h5>{m.title}</h5>
                                    <img src={m.image} alt='skjkd' className='img-fluid'/>
                                    <p className="card-text">{m.body}</p>
                                    <Link to={"detailspage/"+m.id}  className="btn btn-primary">Details</Link>
                                </div>
                            </div>}
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Payhomepage
