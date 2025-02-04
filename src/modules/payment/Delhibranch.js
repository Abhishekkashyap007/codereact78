import React from 'react'
import Noidabranch from './Noidabranch'

function Delhibranch(props) {
  return (
    <div className='border bg-danger p-5'>
      Delhibranch
      <p>{props.name}</p>
      <p>{props.amt}</p>
      <p>{props.price}</p>
      <Noidabranch xyz={props.name}></Noidabranch>
    </div>
  )
}

export default Delhibranch
