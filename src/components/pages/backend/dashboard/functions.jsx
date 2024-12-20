export const getRecipeByCategory = (categoryId, dataRecipe) => {
  let result = [];

  dataRecipe?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });
  return result;
};

export const getCategoryPrices = (dataCategory, dataRecipe) => {
  let result = [];
  let resultCategoryId = [];
  dataCategory?.data.map((categoryItem) => {
    let isResultCategoryExist = false;

    dataRecipe?.data.map((recipeItem) => {
      //boolean check if category exist in result category array
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.category_aid)
      );

      //get index of existing category
      const getIndexCategoryItem = resultCategoryId.indexOf(
        recipeItem.recipe_category_id
      );

      // if category not exist and category with price
      if (
        Number(categoryItem.category_aid) ===
          Number(recipeItem.food_category_id) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.category_aid);
        result.push({
          ...categoryItem,
          recipe_level: Number(recipeItem.recipe_level_id),
        });
      }
      // if category exist add menu price to category
       if (
         Number(categoryItem.category_aid) ===
           Number(recipeItem.recipe_category_id) &&
         isResultCategoryExist === true &&
         getIndexCategoryItem >= 0
       ) {
         result[getIndexCategoryItem].recipe_level += Number(recipeItem.recipe_level_id);
       }
    });

    if (!isResultCategoryExist) {
      result.push({ ...categoryItem, recipe_level: 0 });
      resultCategoryId.push(categoryItem.category_aid);
    }
  });
  return result;
};
