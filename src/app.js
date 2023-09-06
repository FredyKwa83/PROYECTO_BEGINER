const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))


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



app.listen(3004, () => {
    console.log("servidor corriendo")
})

module.exports = app;