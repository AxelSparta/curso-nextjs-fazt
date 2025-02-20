export default function TodoCard ({ todo }) {
  return (
    <div className='border rounded-md p-4 max-w-96 flex flex-col justify-between'>
      <div className="mb-4">
        <h2 className='text-center font-bold text-xl underline mb-4'>Todo 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur
          magnam velit! Dolores, officiis. Soluta quasi numquam, dolorem in
          aperiam dicta ipsam ab consequatur unde sit nostrum laudantium eaque
          voluptate.
        </p>
      </div>
      <div className='flex justify-between'>
        <button className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'>
          Completar
        </button>
        <button className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'>
          Editar
        </button>
        <button className='border rounded-md mx-auto p-2 bg-slate-100 text-slate-950 border-slate-100 font-semibold hover:text-slate-100 hover:bg-slate-950 transition-all'>
          Eliminar
        </button>
      </div>
    </div>
  )
}
