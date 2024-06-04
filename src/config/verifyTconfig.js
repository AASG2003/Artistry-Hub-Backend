import jwt from 'jsonwebtoken'
//Authorization: Bearer <token>
export default function verifyToken(req, res, next){
const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearertoken = bearerHeader.split(" ")[1];
        jwt.verify(bearertoken, 'secretKey', (err, authData) =>{
        if(err){
            res.status(403).json({message:"Token no valido", token: bearerHeader})
        }else{
            req.user = authData
            next()
        }
    })
    }else{
        res.status(403).json({message: "No esta authorizado para el uso de esta direccion"});
    }
}



