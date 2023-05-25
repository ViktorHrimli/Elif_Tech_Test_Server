import mongoose from "mongoose";

const Shema = mongoose.Schema;

const marketShema = new Shema({
  shops: {
    type: Array,
    required: [true, "Shop is required"],
  },
});

const Market = mongoose.model("market", marketShema);

export { Market };
