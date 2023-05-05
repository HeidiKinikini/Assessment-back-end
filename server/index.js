const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, submitAnimal, getFortune, updatePower, deleteAnimal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.post("/api/submit-animal", submitAnimal);
app.get("/api/get-fortune", getFortune);
app.put("/api/update-power", updatePower)
app.delete('/api/delete/:animal', deleteAnimal)



app.listen(4000, () => console.log("Server running on 4000"));
