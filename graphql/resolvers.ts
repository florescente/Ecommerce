import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    users: (_parent: any, _args: any, _context: any) => {
      return prisma.users.findMany()
    },
  },
  Mutation: {
    addUser: (_parent: any, { name }: any, _context: any) => {
      return prisma.users.create({
        data: { name, image: name, email: name },
      })
    },
  },
}
