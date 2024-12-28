const { Model } = require('mongoose')
const userModel = require('../../modules/userModule')
const bcrypt = require('bcryptjs')
// console.log(bcrypt)

async function userSignUpController( req , res){
    try{
        const {email , password , name} = req.body

// is ma user ko define ky bagyr jab chalaya to catch chal rha tha bar bar nichy wala error bar bar a rha tha //  { "message": "user is not defined",  "error": true, "success": false}
        const user = await userModel.findOne({email})
        if(user){
            throw new Error('Already user exist')
        }  

        
        if(!email){
            throw new Error("Please provide email")
         }
         if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hashSync(password, salt);

       if(!hashPassword){
         throw new Error('Something is wrong')
       }

       const payload = {
         ...req.body,
         role : 'general',
         password : hashPassword
       }

       const userData = new userModel(payload)
       const saveUser = await userData.save()

       res.status(201).json({
         data : saveUser,
         success : true,
         error : false,
         message : 'User Created Successfully' 
       })
    }catch(error){
        console.log(error)
        res.json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = userSignUpController