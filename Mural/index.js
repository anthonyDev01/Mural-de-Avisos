const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path")
const apiRouter = require("./routes/api");

app.use("/api", apiRouter)
app.use(express.static(path.join(__dirname, "public")))


app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`);
})
