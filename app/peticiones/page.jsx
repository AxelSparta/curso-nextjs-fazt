const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}
export default async function Peticiones () {
  const posts = await getPosts()
  return (
    <div>
      <h1>Peticiones</h1>
      {posts.map(post => (
        <div className="grid grid-cols-3 gap-4 " key={post.id}>
          <h2 className="text-xl">{post.title}</h2>
          <p className="text-sm">{post.body}</p>
        </div>
      ))}
    </div>
  )
}
