import { NextResponse } from 'next/server'

const mySecretKey = process.env.SECRET_KEY

export function GET (req, { params }) {
  return NextResponse.json({ message: 'Get request!' })
}

export function POST () {
  return NextResponse.json({ message: 'Post request!' })
}

export function PUT () {
  return NextResponse.json({ message: 'Put request!' })
}

export function DELETE () {
  return NextResponse.json({ message: 'Delete request!' })
}
