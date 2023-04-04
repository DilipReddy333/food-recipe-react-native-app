import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

import CategoriesComponent from "../components/CategoriesComponent";
import RecipeComponent from "../components/RecipeComponent";

import { getRecipe } from "../api";

const DiscoverScreen = () => {
  {
    /* user typed recipe */
  }
  const [userRecipe, setUserRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  {
    /* Recipes list */
  }
  const [recipeList, setRecipeList] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("Biryani");
  // console.log(selectedRecipe);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${
          userRecipe || selectedRecipe
        }&app_id=app_id&app_key=app_key`
      )
      .then((response) => {
        // console.log(response.data.hits);
        setRecipeList(response.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [selectedRecipe]);

  const getRecipesHandler = () => {
    // console.log(userRecipe);
    setSelectedRecipe("");
    if (userRecipe.trim().length === 0) {
      alert("Please Enter a Valid Recipe Name");
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${userRecipe}&app_id=add_id&app_key=app_key`
      )
      .then((response) => {
        // console.log(response.data.hits);
        setRecipeList(response.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  {
    /* use state to store the categories recipes */
  }
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      recipe: "All",
    },
    {
      id: 2,
      recipe: "Biryani",
    },
    {
      id: 3,
      recipe: "Curd Rice",
    },
    {
      id: 4,
      recipe: "Rasam",
    },
    {
      id: 5,
      recipe: "Chapati",
    },
    {
      id: 6,
      recipe: "Idly",
    },
    {
      id: 7,
      recipe: "Dosa",
    },
    {
      id: 8,
      recipe: "Pongal",
    },
  ]);

  {
    /* use state for selected recipe */
  }

  return (
    <View className="flex p-2 relative">
      {/* heading for the discover screen */}
      <View className="flex mt-2">
        <Text className="font-bold text-3xl">Find Best Recipe</Text>
        <Text className="font-bold text-3xl">For Cooking</Text>
      </View>

      {/* search bar and the design */}
      <View className="mt-3 flex-row items-center justify-center space-x-4">
        <View className="flex-1">
          <TouchableOpacity className="absolute flex items-center justify-center top-0 left-1 p-2">
            <Ionicons
              name="search-outline"
              size={26}
              color="#50c878"
              className="hover:bg-gray-300 rounded-full"
            />
          </TouchableOpacity>
          <TextInput
            textAlign="right"
            className="px-3 py-3 rounded-md shadow-sm"
            placeholder="Search Recipe Eg:-Biryani"
            value={userRecipe}
            onChangeText={(recipe) => setUserRecipe(recipe)}
            onSubmitEditing={getRecipesHandler}
          />
        </View>

        {/* design */}
        <TouchableOpacity className="bg-[#d8f3e1] w-15 h-11 px-3.5 py-6 text-center rounded-md">
          {/* circles and hyphen container */}
          <View className="flex-col items-center justify-center space-y-3">
            {/*  top  circle and hyphen */}
            <View className="flex-row items-center justify-center space-x-0.5">
              <View className="w-2 h-2 rounded-full bg-[#35b160]"></View>
              <View className="w-3 h-1 rounded-l-full rounded-r-full bg-[#35b160]"></View>
            </View>

            {/*  bottom  circle and hyphen */}
            <View className="flex-row items-center justify-center space-x-0.5">
              <View className="w-3 h-1 rounded-l-full rounded-r-full bg-[#35b160]"></View>
              <View className="w-2 h-2 rounded-full bg-[#35b160]"></View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* horizontal Scrollable  component*/}
      <CategoriesComponent
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
        setUserRecipe={setUserRecipe}
      />

      {/* recipe components */}
      {loading && <ActivityIndicator size={"large"} className="mt-4 mb-4" />}
      {recipeList.length === 0 ? (
        <>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              padding: 8,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 300, height: 300 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2748/2748558.png",
              }}
            />
            <Text style={{ fontWeight: 400, fontSize: 22, color: "#00425A" }}>
              Oops!, Recipe Not Found
            </Text>
          </View>
        </>
      ) : (
        <RecipeComponent recipeList={recipeList} />
      )}
    </View>
  );
};

export default DiscoverScreen;
