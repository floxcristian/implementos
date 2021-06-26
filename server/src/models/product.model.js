const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    code: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 12,
      trim: true
    },
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      trim: true
    },
    description: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 255,
      trim: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
