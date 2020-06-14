const express = require('express')
const app = express()

app.use("/static", express.static("public"))
app.set("view engine", "ejs")


//config do view engine
app.get('/', (req, res) => {
    res.render('todo.ejs')
})


app.listen(3000, () => console.log("Servidor Funcionando"))