import Users from '@/components/Users'

const getUsers = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

export default async function Home () {
  const users = await getUsers()
  console.log(users)
  return (
    <>
      <Users users={users} />
    </>
  )
}
