import NewTodoCard from '@/components/NewTodoCard'
import TaskCard from '@/components/TaskCard'

const getTasks = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/tasks')
    return await res.json()
  } catch (error) {
    return { error: true, message: error.message }
  }
}

export default async function Home () {
  const tasks = await getTasks()
  return (
    <>
      <main className='container mx-auto'>
        <h1>Todo aplication</h1>
        <div className='tasks-container'>
          <NewTodoCard />
          { tasks.error && <p>{tasks.message}</p> }
          { tasks.map(task => <TaskCard key={task.id} task={task} />) }
        </div>
        
        <div className='tasks-container flex gap-4 flex-wrap justify-center'></div>
      </main>
    </>
  )
}
