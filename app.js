const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shotRouter = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRouter);
app.use(shotRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
