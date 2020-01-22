const express = require("express");
const app = express();
const users = require("./routes/users");
const contacts = require("./routes/contacts");
const auth = require("./routes/auth");
const PORT = process.env.PORT || 5000;
// Define Routes
app.use(users);
app.use(contacts);
app.use(auth);
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
