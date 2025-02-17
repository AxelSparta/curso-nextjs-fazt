'use client'

import { useRouter, useParams } from 'next/navigation'

export default function About () {
  const router = useRouter()
  // otra forma de acceder a los params const params = useParams()
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='text-4xl font-bold'>About</h1>
        <p className='text-xl'>
          This is a simple static site generated using <button></button>
        </p>
        <button
          onClick={() => {
            alert('Executing code before redirect!')
            router.push('/')
          }}
        >
          Go back
        </button>
      </main>
    </div>
  )
}
