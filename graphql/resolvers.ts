export const resolvers = {
  Query: {
    users: (_parent: any, _args: any, _context: any) => {
      return 'Hello Beautiful World!'
    },
  },
}
