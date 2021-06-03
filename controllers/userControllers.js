const pool = require('../databases/database');


const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(response.rows);
};


const save = async (req, res) => {
    const { id,
        username,
        password,
        fullname,
        active,
        roles_id } = req.body;
    const response = await pool.query('INSERT INTO users (username,password,fullname,active,roles_id) VALUES ($1, $2,$3,$4,$5)', [username, password, fullname, active, roles_id]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { username, password, fullname, active, roles_id }
        }
    })
};


const deletes = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const { username, password, fullname, active, roles_id } = req.body;
    const response = await pool.query('UPDATE users SET username = $1, password = $2, fullname = $3, active = $4, roles_id = $5 where id = $6', [
        username, password, fullname, active, roles_id, id
    ]);
    res.json('User Updated Successfully');
};






// id,username,password,fullname,active,roles



module.exports = {
    get,
    save,
    update,
    deletes
};