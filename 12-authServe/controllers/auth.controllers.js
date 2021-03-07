const { response } = require('express');

const Usuario =require("../models/Usuarios");
const bcrypt =require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario=async(req,res=response)=>{

    const { email, name, password}= req.body;

    try {
        //Verificar el email
        let usuario =await Usuario.findOne({ email:email});

        if(usuario){
            return res.status(400).json({
                ok:false,
                msg:"El usuario ya existe con ese email"
            })
        }

        //cREAR USUARIO CON EL MODELO
        const dbUser = new Usuario( req.body);

        //Hashear la contraseña
        const salt =bcrypt.genSaltSync();
        dbUser.password=bcrypt.hashSync(password,salt);
        //Generar el JWT
        const token =await generarJWT(dbUser.id, name);
        // CREAR USUARIO

        await dbUser.save();

        //GENERAR RESPUESTA EXITOSA
        return res.status(201).json({
            ok:true,
            uid: dbUser.id,
            name,
            token
        })

        
    } catch (error) {
        return res.json({
            ok:true,
            msg:"Crear usuario" 
        })
    }


}

const loginUsuario= async(req,res=response)=>{


    const { email, password}= req.body;

    try {

        const dbUser =await Usuario.findOne({email});

        if(!dbUser){
            return res.status(400).json({
                ok:false,
                msg:'El correo o exite'
            })
        }
        //confirmar si el password hace match
        const validPassword=bcrypt.compareSync(password, dbUser.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:"El password no es valido"
            })
        }
        //Generar el JWT
        const token= await generarJWT(dbUser.id, dbUser.name);
        // respuesta del servicio
        return res.json({
            ok:true,
            uid:dbUser.id,
            name:dbUser.name,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:"Hable con el administrador"
        })
    }
    return res.json({
        ok:true,
        msg:"Login de usuario"
    })
}

const ravalidarToken=async(req,res= response)=>{

    const { uid, name }= req;
    const token= await generarJWT(uid, name);

    return res.json({
        ok:true,
        uid,
        name,
        token
    })



}

module.exports={
    crearUsuario,
    loginUsuario,
    ravalidarToken
}