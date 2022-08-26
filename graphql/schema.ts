import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
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
