import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Olá do backend em TS!"
    })
})

app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});