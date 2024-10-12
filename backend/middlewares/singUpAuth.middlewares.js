import bcrypt from 'bcrypt';
import Usuario from '../src/models/User.js';

const passValidation = async (req, res) => {
    try {
        let { email, password } = req.body;

        let usuario = await Usuario.findOne({
            where: {
                email,
            },
            attributes: ["id", "nombre", "email", "password"],
        });

        console.log(usuario)

        if (!usuario) {
            return res.status(400).json({
                code: 400,
                message: "Email y/o password incorrecto.",
            });
        }

        let validacionPassword = bcrypt.compareSync(password, usuario.password);

        if (!validacionPassword) {
            return res.status(400).json({
                code: 400,
                message: "Email y/o password incorrecto.",
            });
        } else {
            delete usuario.password;
        }
    } catch (error) {

    }
};
export default passValidation;