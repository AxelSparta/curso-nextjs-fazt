import NewTodoCard from '@/components/NewTodoCard'
import TodoCard from '@/components/TodoCard'

export default function Home () {
  return (
    <>
      <main className='container mx-auto'>
        <h1>Todo aplication</h1>
        <div className='flex gap-4 flex-wrap justify-center lg:justify-normal'>
          <NewTodoCard />
          <TodoCard />
        </div>
      </main>
    </>
  )
}
