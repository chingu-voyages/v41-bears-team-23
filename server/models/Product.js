const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          price:{
            type: Integer,
          },
          description:{
            type: String,
            maxlength: 280,
          },
          image:{
            type: Image,
          },
          rating:{
            rate: Integer,
            count: Integer,
          }
    }
);

module.exports = Product;