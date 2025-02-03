import { GraphQLClient } from "graphql-request"

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_API_URL

if (!endpoint) {
  throw new Error("NEXT_PUBLIC_HYGRAPH_API_URL is not defined")
}

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    // Add any necessary headers here, e.g., authorization
  },
})

// Test the connection
// graphqlClient
//   .request("{ __typename }")
//   .then(() => console.log("GraphQL client connected successfully"))
//   .catch((error) => console.error("GraphQL client connection error:", error))

