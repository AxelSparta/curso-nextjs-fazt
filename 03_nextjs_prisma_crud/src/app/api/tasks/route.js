import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET () {
  const tasks = await prisma.task.findMany()
  return NextResponse.json(tasks)
}

export async function POST (request) {
  const data = await request.json()
  const { title, description } = data
  if (!title) {
    return NextResponse.json(
      { error: 'Missing title or description' },
      { status: 400 }
    )
  }
  const task = await prisma.task.create({
    data
  })
  return NextResponse.json(task)
}
