// const {  SummaryApi } = require("../../../frontend/src/common")
const productModel = require("../../modules/productModule")

const getCategoryWiseProduct = async(req,res)=>{
    try{
        const { category } = req?.body || req?.query
        // console.log('response check Before in wise product category',category)
        const product = await productModel.find({ category })
      
        // console.log('response check in wise product category',product)
        res.json({
            data : product,
            message : "Product",
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryWiseProduct