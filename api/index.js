import axios from "axios";

export const getRecipe = (recipeName) => {
  console.log(recipeName);
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=app_id&app_key=add_key`
    )
    .then((response) => {
      return response.data.hits;
    })
    .catch((err) => console.log(err));
};
