const mongoose=require('mongoose')
const RecipeSchema=new mongoose.Schema({
    name:{
    type:String,
    required:"This is required"
},
description:{
    type:String,
    required:"This is required"
},
ingredients:{
    type:Array,
    required:"This is required"
},


image:{
    type:String,
    
},
})
module.exports=mongoose.model('Recipe',RecipeSchema)