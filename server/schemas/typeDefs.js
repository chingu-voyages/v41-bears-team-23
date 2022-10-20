const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
  },
  type Product {
    _id: ID!
    name: String
    
  },
  type Query {
    _dummy: String
  }
  `






module.exports = typeDefs;