import React from 'react'
import { Modal } from '../../lib/Modal'

export default function Ordercheckout() {
  return (
    <div className='successpage'>
        <Modal>
            <img src='https://i.pinimg.com/enabled_lo/564x/ae/63/7c/ae637c5a476e2c0854b53375e401b78b.jpg'></img>
            <h1 className='successpageheading'>Hooray!!</h1>
            <p className='successpara'>Your Order has been Successfully placed</p>
        </Modal>
    </div>
  )
}
