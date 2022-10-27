const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
  }
  type Product {
    _id: ID!
    category: String
    title: String
    price: Int
    description: String
    image: Image
    rating: Int
    
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    _dummy: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  `






module.exports = typeDefs;