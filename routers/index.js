const express = require('express')
const router =  express.Router()


const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const authToken = require('../middlewares/authToken')
const userDetailsController = require('../controller/user/userDetails')
const userLogout = require('../controller/user/userLogout')
//for admin only
const allUsersData = require('../controller/user/allUsersData')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getAllProduct = require('../controller/product/getAllProduct')
const updateProduct = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProduct')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const viewCartProduct = require('../controller/user/viewCartProduct')
const updateAddToCart = require('../controller/user/updateAddToCard')
const deleteAddToCart = require('../controller/user/deleteAddToCard')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
 



// router.post('/signup',userSignUpController)
// router.post('/signin' , userSignInController)
// router.get('/user-details',authToken,userDetailsController)
// router.get('/userlogout' , userLogout)

//Special api for admin only
// router.get('/all-users',authToken,allUsersData)
// router.post('/update-users',authToken , updateUser)

// checking router
router.get('/check' , (req , res) => res.send('Hello every one checking'))

// Apis for products
// router.post('/upload-product', authToken, UploadProductController)
// router.get('/all-products',getAllProduct)
// router.post('/update-product',authToken,updateProduct)
// router.get('/get-category-product',getCategoryProduct)
// router.post('/category-proudct' , getCategoryWiseProduct)
// router.post('/product-details' , getProductDetails)

// Apis for add to cart products
// router.post('/addtocard',authToken,addToCartController)
// router.get('/addtocartproduct',authToken,countAddToCartProduct)
// router.get('/view-cart-product', authToken , viewCartProduct)
// router.post('/update-cart' , authToken , updateAddToCart)
// router.post('/delete-cart' , authToken , deleteAddToCart)
// router.get('/search' , searchProduct)
// router.post('/filter-product' , filterProductController)


module.exports = router