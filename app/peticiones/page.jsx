import PostCard from "@/components/PostCard"

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  // Simulate a network delay
  await new Promise(r => setTimeout(r, 2000))
  return data
}
export default async function PeticionesPage () {
  const posts = await getPosts()
  return (
    <div>
      <h1>Peticiones</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 mx-auto">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
