import Cors from 'micro-cors'
import { ApolloServer, gql } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { ServerResponse } from 'http'

const cors = Cors()

const prisma = new PrismaClient()

const typeDefs = gql`
  type User {
    id: String
    email: String
    image: String
    name: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(name: String): User
  }
`

const resolvers = {
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

const apolloserver = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloserver.start()

export default cors(async function handler(
  req: MicroRequest,
  res: ServerResponse
) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloserver.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
