import React, { Fragment } from 'react'
import Delhibranch from './Delhibranch'
import Noidabranch from './Noidabranch'

function Paymentabout() {
  let amount=200;
  let styl="Mern stack"
  return (
    <Fragment>
    <div>
      asjskjfskjkd {amount}
    </div>
    <Delhibranch price={amount} amt="10" name={styl}></Delhibranch>
    <Noidabranch/>
    </Fragment>
  )
}

export default Paymentabout
