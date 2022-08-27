import Cors from 'micro-cors'
import { ApolloServer } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { ServerResponse } from 'http'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'

const cors = Cors()

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
