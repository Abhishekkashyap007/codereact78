import React, { Fragment } from 'react'
import Footerpage from '../shares/Footerpage'
import { Outlet } from 'react-router-dom'

function Courselandingpage() {
  return (
    <Fragment>
    <div className='mainpage' style={{marginTop:"0px",minHeight:"85vh"}}>
        <Outlet></Outlet>
    </div>
    <Footerpage/>
   </Fragment>
  )
}

export default Courselandingpage
