import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  try {
    const { taskId } = await params
    const task = await prisma.task.findUnique({
      where: {
        id: Number(taskId)
      }
    })
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 })
    }
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function PUT (request, { params }) {
  try {
    const { taskId } = await params
    const data = await request.json()
    const task = await prisma.task.update({
      where: {
        id: Number(taskId)
      },
      data
    })
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function DELETE (request, { params }) {
  try {
    const { taskId } = await params
    const task = await prisma.task.delete({
      where: {
        id: Number(taskId)
      }
    })
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
