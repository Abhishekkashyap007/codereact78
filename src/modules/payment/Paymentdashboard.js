import React, { Fragment } from 'react'
import { company } from '../../Mydata'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../redux/Myreduxfunction';


function Paymentdashboard() {

    const count = useSelector((state) => state.counter.value)
    const sendfunc=useDispatch();

  return (
    <Fragment>
    <div>
      Dashboard
    </div>
    <ul className='mybdc'>
        <li>Total Employes:{company.length}</li>
        <li>Male: {company ? company.filter((m)=>{return m.gender=="male"}).length :""}</li>
        <li>Female: {company ? company.filter((m)=>{return m.gender=="female"}).length :""}</li>
    </ul>
    <h1>{count}</h1>
    <button type='button' onClick={()=>sendfunc(increment())}>increment</button>
    </Fragment>
  )
}

export default Paymentdashboard
