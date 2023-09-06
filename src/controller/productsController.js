const fs = require("fs");
const path = require("path");
const productosPath = path.join(__dirname, "../data/productos.json");
const  productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));


// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    index: (req, res) => {
        res.render('./products/index', {productos});
    },
    
    detail: function (req, res) {
        
        const id = req.params.id;

        const producto = productos.find(producto => producto.id == id)  /* encontrar un producto de la pagina lsa palabra find es la que lo hece funcionar*/
        if(producto) {
        res.render("./products/detail", {producto});
    } else {
        res.send(`
        <div style= "text-align:center; padding-top:30px"> 
        <h1 style= "font-size: 80px" > El producto no existe </h1>
        <img style="width:30%" src="https://www.psicologo-palma-de-mallorca.es/coste-psicologico-nunca-decir-no.jpg" 
        </div>
        `)
    }
    },

    getEdit: (req, res) => {

        let id = req.params.id;

        const producto = productos.find(producto => producto.id == id);
    
        if (producto){
            res.render('./products/editProduct', {producto});
        }
        
    },

    postEdit: (req, res) => {
        let id = req.params.id;
        l = productos.find(producto => producto.id == id);
        
        if (l){
            l.nombre = req.body.titulo;
            l.precio = req.body.precio;
            l.descuento = req.body.descuento;
                       
        } 

        fs.writeFileSync(productosPath, JSON.stringify(productos, null, ' '));

        res.redirect ('/')
    
    },



    products: (req, res) => {
        res.render('./products/products');
    },

    getCreateProduct: (req, res) => {
        res.render('./products/createProduct');
    },

    putCreateProduct: (req, res) => {
        res.render('./products/createProduct');
    }


};

module.exports = productsController;