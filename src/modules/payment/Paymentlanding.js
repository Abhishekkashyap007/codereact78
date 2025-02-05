import React, { Fragment } from 'react'
import Headerpage from '../shares/Headerpage'
import Footerpage from '../shares/Footerpage'
import { Outlet } from 'react-router-dom'
import Sidebar from '../shares/Sidebar'

function Paymentlanding() {
  return (
    //  <Fragment>
    //   <Headerpage/>
    //   <div className='mainpage'>
    //       <Outlet></Outlet>
    //   </div>
    //   <Footerpage/>
    //  </Fragment>
    <div className='container-fluid'>
      <div className='row  fixed-top'>
        <div className='col-12'>
          <Headerpage />
        </div>
      </div>

      <div className='row mainpage'>
        <div className='col-md-2 bg-info'>
         <Sidebar/>
        </div>
        <div className='col-md-10'>
          <Outlet></Outlet>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <Footerpage />
        </div>
      </div>
    </div>
  )
}

export default Paymentlanding
