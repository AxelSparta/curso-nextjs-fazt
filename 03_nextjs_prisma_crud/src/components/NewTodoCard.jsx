'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'nextjs-toast-notify'

export default function NewTodoCard ({ updateTasks }) {
  const router = useRouter()
  const handleSubmit = async e => {
    try {
      e.preventDefault()
      // como es código cliente, no hace falta colocar toda la url, solo la ruta, si estuviésemos del lado server, habría que poner la url completa
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: e.target.title.value,
          description: e.target.description.value
        })
      })
      await res.json()
      toast.success('¡Tarea creada con éxito!', {
        duration: 2000,
        progress: true,
        position: 'bottom-center',
        transition: 'bounceIn',
      })
      router.refresh()
    } catch (error) {
      toast.error('¡Algo ha ido mal!', {
        duration: 2000,
        progress: true,
        position: 'bottom-center',
        transition: 'bounceIn',
      })
    } finally{
      e.target.reset()
    }
  }

  return (
    <form
      className='border rounded-md p-4 max-w-96 flex flex-col mx-auto'
      onSubmit={handleSubmit}
    >
      <legend className='text-xl font-bold text-center mb-4'>
        Añadir tarea
      </legend>
      <fieldset className='mb-4'>
        <label htmlFor='title'>Título</label>
        <input
          required
          type='text'
          id='title'
          name='title'
          placeholder='Título'
          className='w-full p-2 text-slate-900'
        />
      </fieldset>
      <fieldset className='mb-4'>
        <label htmlFor='description'>Descripción</label>
        <textarea
          id='description'
          name='description'
          placeholder='Descripción'
          className='w-full h-24 p-2 text-slate-900'
        ></textarea>
      </fieldset>
      <button
        className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'
        type='submit'
      >
        Añadir tarea
      </button>
    </form>
  )
}
