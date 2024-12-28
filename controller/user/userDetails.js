const userModel = require("../../modules/userModule")

async function userDetailsController(req , res){
    try{
        console.log('user Id ', req.userId )

        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

    }catch(error){
        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })
    }
} 

module.exports = userDetailsController