'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Note } from '@/utils/types'
import { useEffect, useState } from 'react'
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import Link from 'next/link'

export default function Home () {
  const [notes, setNotes] = useState<Note[]>([])
  const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes') as string)
    if (notes) {
      setNotes(notes)
    }
  }
  useEffect(() => {
    getNotes()
  }, [])

  const deleteNote = (id: string) => {
    console.log(id)
    const newNotes = notes.filter(note => note.id !== id)
    localStorage.setItem('notes', JSON.stringify(newNotes))
    getNotes()
  }
  return (
    <>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0'>
          {notes.length > 0 &&
            notes.map(note => (
              <Card
                key={note.id}
                className='flex flex-col justify-between p-4 min-w-auto'
              >
                <CardHeader>
                  <CardTitle className='text-xl'>{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='break-words'>{note.description}</p>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <Link href={`/edit-note/${note.id}`}>
                    <Button className='cursor-pointer' variant='outline'>
                      <MdOutlineEdit />
                    </Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className='cursor-pointer' variant='destructive'>
                        <MdDeleteOutline />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[425px]'>
                      <DialogHeader>
                        <DialogTitle>Eliminar nota</DialogTitle>
                        <DialogDescription>
                          Estás seguro de que quieres eliminar esta nota?
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter>
                        <DialogClose>
                          <Button
                            variant={'destructive'}
                            type='submit'
                            onClick={() => deleteNote(note.id)}
                          >
                            Eliminar
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
        </div>
        {notes.length === 0 && (
          <div className='text-center'>
            <p>No se ha creado ninguna nota aún.</p>
            <Link className='text-blue-500 underline' href='/new-note'>
              Crea la primera
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
