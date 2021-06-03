//usersssssss


const conexion = require('../databases/database');

const get = async(req, res) => {
    res.send("holas");

   await conexion.query('select * from users', (error, results) => {
        if (error) {
            console.log(error)
        } else {
            // res.redirect('/contacto');
        console.log(results.rows);
        }
    })

}


module.exports = {
    get,
    // getUserById,
    // createUser,
    // updateUser,
    // deleteUser
};
