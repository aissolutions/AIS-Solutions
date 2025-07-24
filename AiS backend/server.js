const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual connection string and database name
mongoose.connect(
  "mongodb+srv://AIS:AIS12345@aisdb.jlnbwem.mongodb.net/aisdb?retryWrites=true&w=majority&appName=AISDB"
);

// Define schema and model
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  course: String,
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model("enquiries", enquirySchema);

// POST endpoint to save enquiry
app.post("/api/enquiry", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
