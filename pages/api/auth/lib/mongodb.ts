import { MongoClient } from 'mongodb'

const uri = process.env.DB_URL!

if (!process.env.DB_URL) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const client = new MongoClient(uri)
const clientPromise = client.connect()

export default clientPromise
