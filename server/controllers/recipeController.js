// homepage
// get 
require('../models/database')
const res = require('express/lib/response')
const Recipe= require('../models/Recipe')
//rendring data on homepage 5 items 
exports.homepage=async(req,res)=>{
    try {
        const limitno=5
        const latest=await Recipe.find({}).sort({_id:-1}).limit(limitno)
        const food={latest}
        res.render('index',{title:'homepage',food});
    } catch (error) {
        console.log(error)
    }
    
}
//rendring indivisual item on single page
exports.exploreRecipe=async(req,res)=>{
    try {
       let recipeId=req.params.id

       const recipe=await Recipe.findById(recipeId)
        res.render('recipe',{title:'Recipe_Details',recipe});
    } catch (error) {
        res.satus(500).send({message:error.message||"error Occur"})
    }
    
 }
 //submitting items
 exports.submitRecipe=async(req,res)=>{
    res.render('submit-recipe',{title:'Submitting'});
 }
 //showing all items on single page
 exports.explorelatest=async(req,res)=>{
    try {
        
        const latest=await Recipe.find({}).sort({_id:-1})
        const food={latest}
        res.render('explore-latest',{title:'showing_all',food});
    } catch (error) {
        console.log(error)
    }
   
 }
 exports.submitRecipeOnPost = async(req, res) => {
    try {
  
      let imageUploadFile;
      let uploadPath;
      let newImageName;
  
      if(!req.files || Object.keys(req.files).length === 0){
        console.log('No Files where uploaded.');
      } else {
  
        imageUploadFile = req.files.image;
        newImageName =  imageUploadFile.name;
  
        uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;
  
        imageUploadFile.mv(uploadPath, function(err){
          if(err) return res.satus(500).send(err);
        })
  
      }
  
      const newRecipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        email: req.body.email,
        ingredients: req.body.ingredients,
        category: req.body.category,
        image: newImageName
      });
      
      await newRecipe.save();
  
     // req.flash('infoSubmit', 'Recipe has been added.')
      res.redirect('/submit-recipe');
    } catch (error) {
      // res.json(error);
      req.flash('infoErrors', error);
      res.redirect('/submit-recipe');
    }
  }
  
  // Delete Recipe
// async function deleteRecipe(){
//   try {
//     await Recipe.deleteOne({ name: 'New Recipe From Form' });
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteRecipe();
exports.updateRecipe=async(req,res)=>{
    const recipe = await Recipe.findById(req.params.id);
    res.render('updateRecipe',{title:'edit-recipe',recipe});
 }
 exports.deleteRecipe=async(req,res)=>{
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    res.redirect('/');
 }

// Update Recipe
// async function updateRecipe(){
//   try {
//     const res = await Recipe.updateOne({ name: 'New Recipe' }, { name: 'New Recipe Updated' });
//     res.n; // Number of documents matched
//     res.nModified; // Number of documents modified
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateRecipe();

  

// async function insertDymmyRecipeData(){
//       try {
//         await Recipe.insertMany([
//           { 
//             "name": "Recipe Name Goes Here",
//             "description": `Recipe Description Goes Here`,
            
//             "ingredients": [
//               "1 level teaspoon baking powder",
//               "1 level teaspoon cayenne pepper",
//               "1 level teaspoon hot smoked paprika",
//             ],
             
//             "image": "southern-friend-chicken.jpg"
//           },
//           { 
//             "name": "Recipe Name Goes Here",
//             "description": `Recipe Description Goes Here`,
           
//             "ingredients": [
//               "1 level teaspoon baking powder",
//               "1 level teaspoon cayenne pepper",
//               "1 level teaspoon hot smoked paprika",
//             ],
             
//             "image": "southern-friend-chicken.jpg"
//           },
//         ]);
//       } catch (error) {
//         console.log('err', + error)
//       }
//     }
    
//     insertDymmyRecipeData();