import { PrismaClient } from '@prisma/client'

// para poder conectarnos a la base de datos
export const prisma = new PrismaClient()
