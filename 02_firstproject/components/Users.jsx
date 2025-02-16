import UserCard from './UserCard'

export default function Users ({ users }) {
  return (
    <div className='container mx-auto flex justify-center items-center min-h-screen py-8'>
      <ul>
        <h1 className='text-3xl font-bold text-center'>Users</h1>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
