const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    code: {
      type: String,
      required: true,
      min: 6,
      max: 12,
      trim: true,
      index: true
    },
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      trim: true,
      index: true
    },
    description: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      trim: true
    },
    partNumber: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    minPrice: {
      type: Number,
      required: true
    },
    manufacturerType: {
      type: String,
      required: true
    },
    providerCodId: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    uen: {
      type: String,
      required: true
    },
    category: {
      id: { type: Number, ref: 'Category', required: true },
      description: { type: String, required: true }
    },
    line: {
      id: { type: Number, ref: 'Line', required: true },
      description: { type: String, required: true }
    },
    images: {
      image150: { type: String },
      image450: { type: String }
    }
  },
  { timestamps: true, collection: 'products' }
);

module.exports = { ProductSchema: mongoose.model('Product', ProductSchema) };
