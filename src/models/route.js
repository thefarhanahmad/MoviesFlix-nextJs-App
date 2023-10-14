import mongoose from "mongoose";

// creating model schema of contact data
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    comment: String,
  },

  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
