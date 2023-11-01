require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions));
// json Accept
app.use(express.json());

app.use(cookieParser());

app.use(express.static("public"));

// Router
// index
app.use("/", require("./routes/root"));
// 404
app.all("*", require("./routes/404"));

// Error Handling
app.use(errorHandler);
// Server
app.listen(PORT, () => console.log(`Server Has Lunched in Port : ${PORT}`));
