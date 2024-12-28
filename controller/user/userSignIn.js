const bcrypt = require('bcryptjs')
const userModel = require("../../modules/userModule")
const jwt = require('jsonwebtoken');

async function userSignInController(req , res){

    try{
        const {email , password} = req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
             throw new Error("Please provide password")
        }

        const user = await userModel.findOne({email})

        if(!user){
            throw new Error("User not found")
        }

       const checkPassword = bcrypt.compare(password, user.password)

    //    console.log('check password both are correct or not ' , checkPassword)

       if(checkPassword){

        const tokenData = {
            _id : user._id,
            email : user.email
        }
        const token = await jwt.sign( tokenData,  process.env.TOKEN_SECRECT_KEY,  { expiresIn: 60 * 60 * 8 });

        const tokenOption = {
            httpOnly : true,
            secure : true
        }
        res.cookie("token" , token).json({
            message : 'Login Successfully',
            data : token,
            success : true,
            error : false
        })

       }else{
        throw new Error("Please check the password")
       }

    }catch(error){

        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })

    }
}

module.exports = userSignInController