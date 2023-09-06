const userController = {

    login: (req, res) => {
        res.render('./user/login');
    },

    perfil: (req, res) => {
        res.render('./user/perfil');
    },
    
    registro: (req, res) => {
        res.render('./user/registro');
    }

}

module.exports = userController;