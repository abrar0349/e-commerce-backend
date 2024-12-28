const jwt = require('jsonwebtoken')
async function authToken(req , res , next){
    try{

        const token = req.cookies?.token

        // console.log('check cookie data', token)

        if(!token){
            return res.status(200).json({
                message : 'please login first...',
                error : true,
                success : false
            })
        }
        jwt.verify(token , process.env.TOKEN_SECRECT_KEY, function(err , decoded){
            // console.log('any error',err)
            // console.log('decoded value',decoded)

            if(!err){
                req.userId = decoded?._id
                next()
            }
            
        } )

    }catch(error){

        res.status(400).json({
            message : error.message || error,
            data : [],
            error : true,
            success : false
        })
    }

}

module.exports = authToken