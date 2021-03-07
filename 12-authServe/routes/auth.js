const { Router } = require('express');
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, ravalidarToken } = require('../controllers/auth.controllers');
const { validarCampo } = require('../middlewares/validar-campos');
const { validarJWT }= require('../middlewares/validar-jwt');

const router =Router();

router.post('/new',
[
    check('name','el campo es obigatorio').not().isEmpty(),
    check('email','el correo es obigatorio').isEmail(),
    check('password','el password es obifatorio').isLength({min:6}),
    validarCampo
]
,crearUsuario);
// Login de usuario
router.post('/',[
    check('email','el campo es obligatorio').isEmail(),
    check('password','la contraseña es obigatoria').isLength({min:6}),
    validarCampo
],loginUsuario);

//validar y revalidar token

router.get('/renew',validarJWT,ravalidarToken)

module.exports= router;