const userModel = require('../../modules/userModule')
async function  allUsersData(req , res){
    try{

        console.log('rq.id', req.userId)

        const allUsersData = await userModel.find()

        res.json({
            message : 'All User Data',
            data : allUsersData,
            success : true,
            error : false
        })

    }catch(error){
        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })
    }
}

module.exports = allUsersData