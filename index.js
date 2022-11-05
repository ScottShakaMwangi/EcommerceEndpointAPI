import express from 'express';
import bodyParser from 'body-parser';

const app = express ();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))








// const dotenv = require("dotenv");
// const userRoute = require("./routes/user")

// dotenv.config();



// app.use("/api/user", userRoute);

