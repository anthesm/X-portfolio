const express = require("express");
const app = express();
const cors = require("cors");

require("./config");

const userSchema = require("./userSchema");

app.use(express.json());
app.use(cors());

// Save Form Data
app.post("/comment", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFormData = new userSchema({
      name,
      email,
      message,
    });
    const result = await newFormData.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving form data" });
  }
});

// Host address
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
