import mongoose from "mongoose";

const Shema = mongoose.Schema;

const shopsShema = new Shema(
  {
    shop: {
      type: String,
      required: [true, "Shop is required"],
    },
    title: {
      type: String,
      required: [true, "food is required"],
    },
    description: {
      type: String,
      required: [true],
    },

    photo: {
      type: String,
      required: [true],
    },
    price: {
      type: Number,
      required: [true],
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = mongoose.model("shop", shopsShema);

export { Shop };
