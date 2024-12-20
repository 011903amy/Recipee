import React from 'react';
import { getRecipeByCategory } from './functions';


const DashboardCard = ({item,dataRecipe}) => {
  // const getCardDetails = menus.filter((item) => item.menu_category === filterby)
  // const getActiveMenu = getCardDetails.filter((item) => item.menu_is_active === true)
  const recipeItem = getRecipeByCategory(item.category_aid,dataRecipe);
  const activeRecipe = recipeItem?.filter((item) => item.recipe_is_active == 1).reduce((prev, cur) => prev + 1, 0)
  const InactiveRecipe = recipeItem.filter((item) => item.recipe_is_active == 0).reduce((prev, cur) => prev + 1, 0)
  


  return (
    <>
    <div className="card bg-secondary p-4 rounded-md border border-line">
                      <small>{item.category_title}</small>
                      <h2 className='text-4xl mb-2 mt-1'>{recipeItem?.length} Item</h2>
                      <ul className='flex gap-5 items-center'>
                        <li className='flex items-center gap-2'>
                          <span className='size-2 rounded-full bg-success block'></span>{activeRecipe} active
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='size-2 rounded-full bg-gray-200 block'></span>{InactiveRecipe} inactive
                        </li>
                      </ul>
                    </div>
    </>
  )
}

export default DashboardCard