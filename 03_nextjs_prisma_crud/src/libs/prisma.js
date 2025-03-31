// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global

// nos evita crear multiples instancias de prisma, si ya tenemos una instancia se utiliza la misma
export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
