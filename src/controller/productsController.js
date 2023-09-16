const fs = require("fs");
const path = require("path");
const productosFilePath = path.join(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


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

    putEdit: (req, res) => {
        let idBody = req.params.idBody;
        let productoEditado;
        
        for (let obj of productos){
            if(obj.id == idBody){
                productoEditado = obj;
                break;
            }
        }

        res.render('edit', {productoEditado})
    },

    products: (req, res) => {
        res.render('./products/products');
    },

    getCreateProduct: (req, res) => {
        res.render('./products/createProduct');
    },

    postCreateProduct: (req, res) => {

            // PREGUNTAR SI AQUI VA ESTE CODIGO PARA VALIDAR LA SUBIDA DE IMAGENES
            
            // const file = req.file
            // if (!file) {
            // const error = new Error('Por favor seleccione un archivo')
            // error.httpStatusCode = 400
            // return next(error)
            // }
            // res.send(file)

       
        let datosFormulario = req.body;
		let idProductoNuevo = (productos[productos.length-1].id)+1; // obtener un id (acordate por que +1)
		// console.log(idNuevoLibro); // verificar antes de continuar

        let nombreImagen = req.file.filename;
        console.log(nombreImagen)

		let objNuevoProducto = {
			id: idProductoNuevo,
			nombre: datosFormulario.nombre,
			precio: parseInt(datosFormulario.precio),
			descuento: parseInt(datosFormulario.descuento),
			image: nombreImagen, 
		}

		productos.push(objNuevoProducto);

		fs.writeFileSync(productosFilePath, JSON.stringify(productos,null,' '));

		res.redirect('/'); // manda el producto al index
    },

    destroy: (req, res) => {
        
        let id = req.params.id;
        let productoEncontrado;
        
        let numeroProducto = productos.filter(function(e){
            return id!=e.id;
        })

        for (let product of productos){
            if (product.id == id){
                productoEncontrado=product;
            }
        }

        fs.unlinkSync(path.join(__dirname, "../../public/img/imagen_llegada/", productoEncontrado.image))

        fs.writeFileSync(productosFilePath, JSON.stringify(numeroProducto,null,' '));

		res.redirect('/');
    }


};

module.exports = productsController;