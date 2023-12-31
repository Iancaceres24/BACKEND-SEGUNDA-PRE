import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    code:{
        type: Number,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    status: Boolean,

    thumbnails:{
        type: Array,
        require: true
    },
    
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model("products",productSchema)

export default productModel