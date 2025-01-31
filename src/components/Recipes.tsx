import { useEffect } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { fetchRecipes } from "../store/receipesSlice";
import { useAppDispatch } from "../hooks/hooks";

const Recipes = () => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const dispatch = useAppDispatch();
  console.log("Recipes: ", recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      {recipes.map((recipe) => (
        <div>
          <div>{recipe.name}</div>
          <div>{recipe.ingredients.join(", ")}</div>
        </div>
    ))}
    </div>
  )
};

export default Recipes;