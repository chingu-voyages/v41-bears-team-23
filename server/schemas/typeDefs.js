const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query{
    helloWorld: String
  }

  type User {
    _id: ID!
    username: String
    email: String
  }
  type Product {
    _id: ID
    title: String
    price: Int
    description: String
    category: String
    image: String
}
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    products: [Product]
    productByCategory(category: String): [Product]
    singleProduct(_id : ID!): Product
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  `






module.exports = typeDefs;