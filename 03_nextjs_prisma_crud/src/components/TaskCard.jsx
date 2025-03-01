'use client'
import { toast } from 'nextjs-toast-notify'
import { useRouter } from 'next/navigation'

export default function TaskCard ({ task }) {
  const router = useRouter()
  const deleteTask = async id => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE'
      })
      return await res.json()
    } catch (error) {
      return { error: true, message: error.message }
    }
  }
  const handleDelete = async () => {
    const res = await deleteTask(task.id)
    if (res.error) {
      toast.error(res.message, {
        duration: 2000,
        progress: true,
        position: 'bottom-center',
        transition: 'bounceIn'
      })
    } else {
      toast.success('¡Tarea eliminada con éxito!', {
        duration: 2000,
        progress: true,
        position: 'bottom-center',
        transition: 'bounceIn'
      })
      router.refresh()
    }
  }

  const handleEdit = () => {
    router.push(`/edit/${task.id}`)
  }
  return (
    <div className='border rounded-md p-4 max-w-96 flex flex-col justify-between mx-auto'>
      <div className='mb-4'>
        <h2 className='text-center font-bold text-xl underline mb-4'>
          {task.title}
        </h2>
        {task.description && <p>{task.description}</p>}
      </div>
      <div className='flex justify-between gap-2'>
        <button className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'>
          Completar
        </button>
        <button
          className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'
          onClick={handleEdit}
        >
          Editar
        </button>
        <button
          className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
