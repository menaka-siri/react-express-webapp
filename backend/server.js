import express, { json, urlencoded } from "express";
import cors from "cors";

import {db} from "./app/models/index.js"

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(json());

//parse requests of content type - application/x-wwww-form-urlendcoded
app.use(urlencoded({ extended: true }));

db.sequelize.sync();

// db.sequelize.sync({ force: true}).then(() => {
//     console.log("Drop and re-sync db.");
// });

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Zealtrack react-node sample app"});
});

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

