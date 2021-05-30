const conexion = require('../databases/database');
const bcryptjs = require('bcrypt')

const get = async (req, res) => {
    await conexion.query('select * from users', (error, results) => {
        if (error) {
            console.log(error)
        } else {
            // res.redirect('/contacto');
            // console.log(results.rows);
            res.json(results.rows);
        }
    })

}
const post = async (req, res) => {
   // const user = { username:req.body.username, password: req.body.password, fullname:req.body.fullname, active:req.body.active, roles_id:req.body.roles_id}



    // const user = req.body.user;
    // const name = req.body.name;
    // console.log(req.body.name);
    // const rol = req.body.rol;
    const passwords = req.body.password;
    // const  passwordHaash = await bcryptjs.hash(passwords, 8);
    // const  password = passwordHaash;
    // console.log(password)
    // connection.query('INSERT INTO users SET ?', { username:req.body.username, password: passwords, fullname:req.body.fullname, active:req.body.active, roles_id:req.body.roles_id}, async (error, results) => {
    //     if (error) {
    //         throw error;
    //     } else {
    //         // console.log("usuario insertado");
    //         res.render('register', {
    //             alert: true,
    //             alertTitle: "Registration",
    //             alertMessage: "¡Successful Registration!",
    //             alertIcon: 'success',
    //             showConfirmButton: false,
    //             timer: 1500,
    //             ruta: ''
    //         })

    //     }

    // });




// res.json(user);
}



module.exports = {
    get,
    post
}