import React from 'react'
import { Modal } from '../../lib/Modal'
import Image from 'next/image'
export default function Ordercheckout() {
  return (
    <div className='successpage'>
        <Modal>
          <Image src='https://i.pinimg.com/enabled_lo/564x/ae/63/7c/ae637c5a476e2c0854b53375e401b78b.jpg' alt='success-illustartion' width='660' height="550" className='cart-illustrations'></Image>
            <h1 className='successpageheading'>Hooray!!</h1>
            <p className='successpara'>Your Order has been Successfully placed</p>
        </Modal>
    </div>
  )
}
