import React from 'react'

async function UserPage ({ params }) {
  const { id } = await params
  return <div>UserPage {id}</div>
}

export default UserPage
