'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function NewNote () {
  const formSchema = z.object({
    title: z.string().min(3, {
      message: 'Title must be at least 3 caracters'
    }),
    description: z.string().min(3, {
      message: 'Description must be at least 3 caracters'
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })
  return <h1>New Note Page</h1>
}
