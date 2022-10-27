const { User, Product } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers= {
  Query:{
    products: async(parent, {username }) =>{
      params = username ? { username } : {}
      return Product.find(params);
    },
    singleProduct: async(parent, {_id}) =>{
      return Product.findOne({ _id })
    },
    productByCategory: async(parent, {category }) =>{
      const params = category ? { category } : {}
      return Product.find(params)
    }
  },
Mutation: {
  addUser: async (parent, args) => {
    try {
      const user = await User.create(args);

      const token = signToken(user);
      return { token, user };
    } catch (err) {
      console.log(err);
    }
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const token = signToken(user);
    console.log(token);
    return { token, user };
  }
}
};


  module.exports = resolvers