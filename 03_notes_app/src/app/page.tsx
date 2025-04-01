'use client'
import { Note } from '@/utils/types'
import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MdDeleteOutline } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { DialogClose } from '@radix-ui/react-dialog'

export default function Home () {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([])
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes') as string)
    setNotes(notes)
  }, [])

  const deleteNote = (id: string) => {
    console.log(id)
  }
  return (
    <>
      <main className='container mx-auto'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0'>
          {notes &&
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
                  <Button className='cursor-pointer' variant='default'>
                    {' '}
                    <FaEdit />{' '}
                  </Button>
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
      </main>
    </>
  )
}
