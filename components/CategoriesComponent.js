import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const CategoriesComponent = ({
  recipes,
  selectedRecipe,
  setSelectedRecipe,
  setUserRecipe,
}) => {
  return (
    <ScrollView
      horizontal={true}
      className="flex-row space-x-2 py-4 mt-1 rounded-md"
    >
      {recipes.map((recipe) => {
        return (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => {
              setSelectedRecipe(recipe.recipe);
              setUserRecipe("");
            }}
          >
            <Text
              className={`${
                selectedRecipe === recipe.recipe
                  ? "px-5 py-2 text-center font-bold text-lg shadow-md rounded-lg bg-[#1d9445] text-white"
                  : "px-5 py-2 text-center font-bold text-lg shadow-md rounded-lg text-black"
              }`}
            >
              {recipe.recipe}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesComponent;
