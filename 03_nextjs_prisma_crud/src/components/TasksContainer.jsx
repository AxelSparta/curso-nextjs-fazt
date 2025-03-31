import TaskCard from '@/components/TaskCard'

const getTasks = async () => {
  const data = await fetch('http://localhost:3000/api/tasks')
  return await data.json()
}
export default async function TasksContainer () {
  const tasks = await getTasks()
  return (
    <>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  )
}
