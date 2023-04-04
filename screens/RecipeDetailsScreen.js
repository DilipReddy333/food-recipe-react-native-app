import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import IngredientComponent from "../components/IngredientComponent";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { recipe } = { ...route.params.recipe };

  return (
    <View className="p-4 relative flex-1">
      {/* heading section */}
      <View className="flex-row items-center justify-between ">
        {/* back arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-8 h-8 rounded-full text-center shadow-md flex items-center justify-center bg-white  flex-none"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        {/* three dots */}
        <TouchableOpacity className="w-8 h-8 rounded-full text-center shadow-md bg-white flex items-center justify-center  flex-none">
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* image section */}
      <View className="mt-3 h-[30%]">
        <Image
          className="w-full h-full object-cover rounded-xl"
          source={{
            uri: `${recipe?.image}`,
          }}
        />
      </View>

      {/* recipe name */}
      <View className="mt-1">
        <Text className="text-base font-bold flex items-center justify-center text-center w-auto">
          {recipe?.label}
        </Text>
      </View>

      {/* view to show the ingredients */}
      <View className="mt-2">
        <Text className="text-left font-bold text-[22px]">
          Ingredients -
          {recipe?.ingredients?.length ? recipe.ingredients.length : ""}
        </Text>
      </View>

      {/* scrollview to show all the ingredients */}
      <ScrollView className="mt-2">
        {recipe?.ingredients?.map((ingredient, i) => {
          return <IngredientComponent ingredient={ingredient} key={i} />;
        })}
      </ScrollView>

      {/* start cook button */}
      <TouchableOpacity
        onPress={() => {
          // console.log(recipe);
          navigation.navigate("Recipe Process Screen", {
            recipe: { ...route.params.recipe },
          });
        }}
        className="flex rounded-lg items-center justify-center p-4 bg-black font-medium"
      >
        <View className="flex-row items-center justify-between w-[40%]">
          <Text className="text-white text-[16px]">Start Cook!</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeDetailsScreen;
