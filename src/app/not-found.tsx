import Link from 'next/link'
import Image from 'next/image'
export default function NotFound() {
  return (
    <div className='error-page'>
        <section className='illustration-error'>
        <Image src='https://i.pinimg.com/564x/6e/79/bd/6e79bd03740466297664aa754d3c9c7a.jpg' alt='empty cart' width='600' height="500" ></Image>
        </section>
        <section className='details-error'>
        <h1 className='error404'>404</h1>
        <h2>LOOKS LIKE YOU ARE LOST</h2>
        <p style={{color: 'grey'}}>The page you are looking for is not available :( </p>
        <Link href="/"><button className='cartbutton'>Go to home</button></Link>
        </section>
    </div>
  )
}

