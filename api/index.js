import axios from "axios";

export const getRecipe = (recipeName) => {
  console.log(recipeName);
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=8e39c23a&app_key=%2005d61da110b66af90ee209ee131981c4%09`
    )
    .then((response) => {
      return response.data.hits;
    })
    .catch((err) => console.log(err));
};
