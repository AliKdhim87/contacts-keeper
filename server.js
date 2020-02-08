const express = require("express");
const app = express();
const connectDB = require("./config/db");
const users = require("./routes/users");
const contacts = require("./routes/contacts");
const auth = require("./routes/auth");
const path = require("path");
const PORT = process.env.PORT || 5000;
// Connect database
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use(users);
app.use(contacts);
app.use(auth);
// Server Static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
