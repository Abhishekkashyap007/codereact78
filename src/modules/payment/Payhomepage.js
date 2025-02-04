import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Payhomepage() {
    const [mydata, myupdatedata] = useState([])

    const myapi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
            console.log(d.data);
            myupdatedata(d.data)
        })
    }

    useEffect(()=>{
        myapi();
    },[])
    
    return (
        <div>
            Call API in React js
            <input type="button" value="call api" onClick={myapi} />
            <div className='container'>
                <div className='row'>
                    {mydata.map((m)=>{
                        return(
                            <div className='col-md-4 mt-3'>
                        <div className="card bg-info">
                           <div className="card-body">
                                <h5 className="card-title">{m.id}</h5>
                                <h5>{m.title}</h5>
                                <p className="card-text">{m.body}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                        )
                    })}

                    
                </div>
            </div>
        </div>
    )
}

export default Payhomepage
