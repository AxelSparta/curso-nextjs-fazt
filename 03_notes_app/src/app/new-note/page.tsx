'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { v4 as uuidV4 } from "uuid";
import { useRouter } from 'next/navigation'


import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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

export default function NewNotePage () {

  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })

  function onSubmit (data: z.infer<typeof FormSchema>) {
    const { title, description } = data
    const newNote = {
      id: uuidV4(),
      title,
      description
    }
    if (localStorage.getItem('notes')) {
      const notes = JSON.parse(localStorage.getItem('notes') as string)
      notes.push(newNote)
      localStorage.setItem('notes', JSON.stringify(notes))
    } else {
      const notes = [newNote]
      localStorage.setItem('notes', JSON.stringify(notes))
    }

    router.push('/')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-md mx-auto flex flex-col gap-4'
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
                <Textarea placeholder='Título de la nota' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full'>
          <Button className='block mx-auto invert' type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  )
}
