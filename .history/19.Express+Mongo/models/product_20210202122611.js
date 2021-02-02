const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }

    price : {
        type : String , 
        required : true
        min : 0
    }

    categories : {
        type : String,
        enum : ['fruit' , 'vegetable' , 'dairy']
    }

})