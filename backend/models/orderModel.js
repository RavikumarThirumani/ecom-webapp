import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    shippingAddress: {
        address: {type:String, required:true},
        city: {type:String, required:true},
        postalCode: {type:String, required:true},
        country: {type:String, required:true}
    }
},{
    timestamps:true,
})
 

const Order = mongoose.model('Order', orderSchema)
export default Order