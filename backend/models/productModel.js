
const mongoose = require('mongoose');

// Recursive reply schema
const replySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    index: true  // Optional, helps populate perform faster on large collections
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, { _id: true });

// Add recursive replies
replySchema.add({ replies: [replySchema] });

// Comment schema
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    index: true  // Optional, helps populate perform faster on large collections
  },
  text: {
    type: String,
    required: true,
  },
  replies: [replySchema], // Top-level replies
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { _id: true });

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: String,
  type: {
    type: String,
    enum: ['Clothes', 'Electronics', 'Groceries'],
    required: true
  },
  price: Number,
  stock: Number,
  category: String,
  subcategory: String,
  bestSeller: Boolean,
  discount: {
    type: Number,
    default: 0
  },
  description: String,
  images: [String],
  comments: [commentSchema],
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
      rating: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
