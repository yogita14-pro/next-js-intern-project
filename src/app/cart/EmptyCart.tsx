import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function EmptyCart() {
  return (
    <div style={{textAlign:'center'}}>
        <Image src='https://i.pinimg.com/564x/92/8b/b3/928bb331a32654ba76a4fc84386f3851.jpg' alt='empty cart' width='500' height={'500'} className='cart-illustrations'></Image>
        <h1>Ohh...Your Cart is Empty</h1>
        <p style={{color: 'grey'}}>Looks like you havenot made your choice yet...</p>
        <Link href="/"><button className='cartbutton'>Shop Now</button></Link>
    </div>
  )
}

