import NewTodoCard from '@/components/NewTodoCard'
import TasksContainer from '@/components/TasksContainer'

export default async function HomePage () {
  return (
    <>
      <main className='container mx-auto'>
        <div className='tasks-container'>
          <NewTodoCard />
          <TasksContainer />
        </div>

        <div className='tasks-container flex gap-4 flex-wrap justify-center'></div>
      </main>
    </>
  )
}
