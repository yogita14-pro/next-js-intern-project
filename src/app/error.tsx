'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
   const router=useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className='error505'>
        <img src='https://i.pinimg.com/564x/7f/6a/54/7f6a54e73c809a94520f38d01d5350c4.jpg'/>
      <h2>Something went wrong!</h2>
      <button className='cartbutton'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push("/")
        }
      >
        Back to Home Page
      </button>
    </div>
  )
}
