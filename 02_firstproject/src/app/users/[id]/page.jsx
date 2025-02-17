import Link from 'next/link'
import React from 'react'

const getUser = async id => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

async function UserPage ({ params }) {
  const { id } = await params
  const user = await getUser(id)
  return (
    <main className='container mx-auto py-5 flex flex-col items-center gap-3'>
      <img
        className='rounded-full'
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name} avatar`}
      />
      <h1 className='font-bold text-3xl'>
        {user.first_name} {user.last_name}
      </h1>
      <p>email: {user.email}</p>
      <Link className='text-blue-500 hover:text-blue-700' href='/'>
        Volver a la lista de usuarios
      </Link>
    </main>
  )
}

export default UserPage
