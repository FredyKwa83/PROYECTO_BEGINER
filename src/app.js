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

// const detailRouter = require("./routes/productsRoutes")
// app.use("/detail", detailRouter)

// const editProductRouter = require("./routes/productsRoutes")
// app.use("/editProduct", editProductRouter)

// const productsRouter = require("./routes/productsRoutes")
// app.use("/products", productsRouter)

// const createProductsRouter = require("./routes/productsRoutes")
// app.use("/createProduct", createProductsRouter)


// SE CREO PARA VISTAS DE USUARIOS

const userRouter = require("./routes/userRoutes");
app.use("/user", userRouter);

// const perfilRouter = require("./routes/userRoutes");
// app.use("/perfil", perfilRouter);

// const registroRouter = require("./routes/userRoutes");
// app.use("/registro", registroRouter);


//ESTE MILDWARE HAY QUE PONERLO AL FINAL

app.use((req, res, next) => {
    res.status(404).render('error')
    
    // .send(`
    // <div style= "text-align:center; padding-top:30px"> 
    // <h1 style= "font-size: 80px" > Error 404 </h1>
    // <img style="width:30%" src="https://www.psicologo-palma-de-mallorca.es/coste-psicologico-nunca-decir-no.jpg" 
    // </div>
    // `);
   })
   

app.listen(3004, () => {
    console.log("servidor corriendo")
})

module.exports = app;