import React from 'react'
import Link from 'next/link'
export default function EmptyCart() {
  return (
    <div style={{textAlign:'center'}}>
        <img src='https://i.pinimg.com/564x/92/8b/b3/928bb331a32654ba76a4fc84386f3851.jpg' alt='empty cart'></img>
        <h1>Ohh...Your Cart is Empty</h1>
        <p style={{color: 'grey'}}>Looks like you haven't made your choice yet...</p>
        <Link href="/"><button className='cartbutton'>Shop Now</button></Link>
    </div>
  )
}

