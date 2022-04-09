const express = require("express");
// App ROuter
const router=express.Router()
const recipeController=require('../controllers/recipeController')
router.get('/',recipeController.homepage)
router.get('/recipe/:id',recipeController.exploreRecipe)
router.get('/submit-recipe',recipeController.submitRecipe)
router.get('/explore-latest',recipeController.explorelatest)
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/updateRecipe/:id',recipeController.updateRecipe)
router.get('/deleteRecipe/:id',recipeController.deleteRecipe)
module.exports=router