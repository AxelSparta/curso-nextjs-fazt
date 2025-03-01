import TaskCard from '@/components/TaskCard'

const getTasks = async () => {
  const tasks = await fetch('http://localhost:3000/api/tasks')
  return await tasks.json()
}
export default function TasksContainer () {
  return <>'asda'</>
}
