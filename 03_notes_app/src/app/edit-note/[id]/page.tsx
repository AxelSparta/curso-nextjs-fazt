'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useEffect } from 'react'
import { Note } from '@/utils/types'

const FormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'El título debe tener como mínimo 2 caracteres.'
    })
    .max(200, {
      message: 'El título no puede tener más de 200 caracteres.'
    }),
  description: z.string().min(10, {
    message: 'La descripción debe tener mínimo 10 caracteres.'
  })
})

export default function EditNotePage () {
  const router = useRouter()

  const params = useParams()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes') as string)
    const noteToEdit = notes.find((note: Note) => note.id === params.id)
    form.setValue('title', noteToEdit.title)
    form.setValue('description', noteToEdit.description)
  }, [])

  const handleEditForm = (data: z.infer<typeof FormSchema>) => {
    const { title, description } = data

    const newNote = {
      id: params.id,
      title,
      description
    }

    if (localStorage.getItem('notes')) {
      const notes = JSON.parse(localStorage.getItem('notes') as string)
      const newNotes = notes.map((note: Note) => {
        if (note.id === params.id) {
          return newNote
        }
        return note
      })
      localStorage.setItem('notes', JSON.stringify(newNotes))
    } else {
      const notes = [newNote]
      localStorage.setItem('notes', JSON.stringify(notes))
    }

    router.push('/')
  }

  return (
    <Form {...form}>
      <form
        className='max-w-md mx-auto flex flex-col gap-4'
        onSubmit={form.handleSubmit(handleEditForm)}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Título</FormLabel>
              <FormControl>
                <Input placeholder='Título de la nota' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Descripción</FormLabel>
              <FormControl>
                <Textarea placeholder='Descripción de la nota' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full'>
          <Button className='block mx-auto invert' type='submit'>
            Editar
          </Button>
        </div>
      </form>
    </Form>
  )
}
