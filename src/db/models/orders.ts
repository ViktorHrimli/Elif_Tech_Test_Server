import mongoose from "mongoose";

const Shema = mongoose.Schema;

const orderShema = new Shema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },

    adress: {
      type: String,
      require: [true, "Adress is required"],
    },
    phone: {
      type: String,
      require: [true, "Phone is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = mongoose.model("order", orderShema);

export { Order };
