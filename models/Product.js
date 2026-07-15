import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title:        { type: String, required: true },
  product_type: { type: String, required: true, index: true },
  slug:         { type: String, required: true, unique: true, index: true },
  priceUSD:     { type: Number, required: true, min: 0 },
  sizes:        { type: [String], default: [] },
  colors:       { type: [String], default: [] },
  images:       { type: [String], default: [] },
  inStock:      { type: Boolean, default: true },
  category:     { type: String, required: true, index: true },
}, { timestamps: true });

const Product = mongoose.models.Product
  || mongoose.model('Product', productSchema, 'products');

export default Product;