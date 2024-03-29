const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.get("/api/sample", (req, res) => {
  res.json(
    {
      "message": "Working fine!"
    }
  )
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
