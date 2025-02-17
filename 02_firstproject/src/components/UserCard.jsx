import React from 'react'
import Link from 'next/link'

function UserCard ({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <li className='flex my-4 rounded-md gap-x-4 bg-slate-300 text-slate-900 p-2 hover:scale-110 transition-scale duration-200'>
        <img
          src={user.avatar}
          alt={`${user.first_name} avatar`}
          className='size-20 rounded-full'
        />
        <div>
          <h2 className='font-medium text-xl text-center'>
            {user.first_name} {user.last_name}
          </h2>
          <p>{user.email}</p>
        </div>
      </li>
    </Link>
  )
}

export default UserCard
