import axios from 'axios'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next/types'
import React from 'react'

interface Images {
  url: string
}

interface Pokemon {
  name: string
  description: string
  price: number
  imagesCollection: {
    items: [Images]
  }
  type: [string]
  level: number
  height: number
  weight: number
  category: string
  abilities: [string]
  gender: string
}

function Product({ product }: { product: Pokemon }) {
  if (product === null) {
    return "That's not a third generation pokemon"
  }
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h1>Price: {product.price}</h1>
      <h1>Description: {product.description}</h1>
      <h1>
        {product.imagesCollection?.items.map((image) => (
          <img src={image.url} alt="alt" key={image.url} />
        ))}
      </h1>

      <h2>Detalhes do Produto</h2>
      <h3>Category: {product.category}</h3>
      <div>
        <h2>Types:</h2>
        {product.type?.map((type) => (
          <h5 key={type}>{type}</h5>
        ))}
      </div>
      <h3>Level: {product.level}</h3>
      <h3>Height: {product.height}</h3>
      <h3>Weight: {product.weight}</h3>
      <div>
        <h2>Ablilities:</h2>
        {product.abilities?.map((abi) => (
          <h5 key={abi}>{abi}</h5>
        ))}
      </div>
      <h3>Gender: {product.gender}</h3>

      <h1>Adicionar ao Carrinho</h1>
      <h1>Compre Agora</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  let pokemon = ctx.params?.slug
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_ID}/environments/master`
  const headers = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
  const graphqlQuery = {
    query: `query Product($name: String) {
      pokemonCollection(where: {slug: $name}) {
        items {
          name
          description
          price
          imagesCollection {
            items {
              url
            }
          }
          category
          type
          level
          height
          weight
          abilities
          gender
        }
      }
    }`,
    variables: { name: pokemon },
  }

  const response = await axios.post(endpoint, graphqlQuery, headers)

  const { data } = await response.data
  const { pokemonCollection } = data
  const { items } = pokemonCollection
  let product = items[0]
  if (product === undefined) {
    product = null
  }

  return {
    props: {
      session,
      product,
    },
  }
}

export default Product
