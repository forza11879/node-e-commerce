import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const ParentSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true, // if there is index: true then unique is not needed
      index: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //   wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export const User = mongoose.model('User', ParentSchema);
