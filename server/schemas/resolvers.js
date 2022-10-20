const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers= {
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