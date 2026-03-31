import mongoose from "mongoose";

const repairListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true }, // phone model
  password: { type: String }, // device password (optional)
  phone: { type: String, required: true }, // phone number
  fault: { type: String, required: true }, // lcd, battery, etc
  price: { type: Number, default: 0 },
  status: { type: Boolean, default: false }, // done or not
  note: { type: String }
}, { timestamps: true });

const repairList = mongoose.model("repairList", repairListSchema)

export default repairList;

// name, model, password, phone, fault, price, status, note