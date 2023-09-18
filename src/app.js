const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public/")));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

// PARA ENVIAR INFORMACION POR POST

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// para poder sobreescribir el método original y poder implementar los 
//métodos PUT o DELETE

const methodOverride = require('method-override');
app.use(methodOverride('_method')); 


// SE CREO PARA VISTAS DE PRODUCTOS

const indexRouter = require("./routes/productsRoutes")
app.use("/", indexRouter)

// SE CREO PARA VISTAS DE USUARIOS

const userRouter = require("./routes/userRoutes");
app.use("/user", userRouter);

//ESTE MILDWARE HAY QUE PONERLO AL FINAL

app.use((req, res, next) => {
    res.status(404).render('error')
})
   

app.listen(3004, () => {
    console.log("servidor corriendo")
})

module.exports = app;