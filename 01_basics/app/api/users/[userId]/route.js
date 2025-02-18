import { NextResponse } from 'next/server'

export async function GET (req, { params }) {
  const { userId } = await params
	// URL es un objeto nativo de Node.js que representa una URL, incluyendo su protocolo, dominio, puerto, ruta, etc.
	// Ahí podemos extraer los params a través de la propiedad searchParams
  const url = new URL(req.url)
  console.log(url.searchParams)
  return NextResponse.json({
    message: `Get request for user ${userId}!`
  })
}
