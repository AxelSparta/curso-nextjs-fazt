'use client'

export default function NewTodoCard () {
  return (
    <div className='border rounded-md p-4 max-w-96 flex flex-col'>
      <legend className='text-xl font-bold text-center mb-4'>
        Añadir tarea
      </legend>
      <fieldset className='mb-4'>
        <label htmlFor='title'>Título</label>
        <input
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
        onSubmit={() => {}}
      >
        Añadir tarea
      </button>
    </div>
  )
}
