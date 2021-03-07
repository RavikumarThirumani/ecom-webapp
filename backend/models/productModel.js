import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
// If not required delete it
// creates which user creating product
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    processor: {
        type: String,
        required: true,   
    },
    description: {
        type: String,
        required: true,
        default: false
    },  
    price: {
        type: Number,
        required: true,
        default: 0
    },   
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product