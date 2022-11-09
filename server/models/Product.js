const { Schema, model } = require('mongoose');

const productSchema = new Schema(
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
            type: Number,
          },
          description:{
            type: String,
          },
          image:{
            type: String,
          },
    },
    {
      toJSON:{
        virtuals: true
      }
    }
);

const Product = model('Product', productSchema);

module.exports = Product;