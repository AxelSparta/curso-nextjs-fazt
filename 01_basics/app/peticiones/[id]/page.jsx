import { Suspense } from 'react'
import Posts from '../page'

const getPost = async id => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  const data = await response.json()
  // Simulate a network delay
  await new Promise(r => setTimeout(r, 1000))
  return data
}

export default async function PeticionesId ({ params }) {
  const post = await getPost(params.id)
  return (
    <>
      <div>
        <h3 className='text-2xl'>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <hr />
      <div>
        <h3>Otros posts</h3>
        <Suspense fallback={<div>Loading...</div>}>
          <Posts />
        </Suspense>
      </div>
    </>
  )
}
