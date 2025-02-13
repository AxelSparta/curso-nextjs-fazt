'use client'

import Link from 'next/link'

export default function PostCard ({ post }) {
  return (
    <div className='bg-white shadow-md rounded-lg text-slate-900'>
      <div className='p-5'>
        <h2 className='text-xl'>
          {post.id} {post.title}
        </h2>
        <p className='text-sm'>{post.body}</p>
        <Link
          className='bg-blue-500 text-white border rounded-md p-4 mx-auto hover:bg-blue-900'
          href={`/peticiones/${post.id}`}
        >
          Click
        </Link>
      </div>
    </div>
  )
}
