export default function Peticiones () {
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
  }

  fetchData()
  return (
    <div>
      <h1>Peticiones</h1>
    </div>
  )
}
