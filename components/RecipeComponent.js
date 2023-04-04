import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecipeComponent = ({ recipeList }) => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} className="flex-row space-x-5 mt-2 relative">
      {recipeList.map((recipe, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() =>
              navigation.navigate("Recipe Details", { recipe: recipe })
            }
          >
            <View className="">
              <Image
                source={{ uri: recipe?.recipe?.images?.REGULAR?.url }}
                className="w-full h-2/4 object-cover px-40 py-56 rounded-xl"
              ></Image>
              {/* <View className="absolute bg-[#d8f3e1] right-3 top-3 rounded-lg">
                <View className="p-2">
                  <Feather name="bookmark" size={30} color="black" />
                </View>
              </View> */}
              <Text
                numberOfLines={1}
                className="text-base bottom-20 text-white left-1 absolute flex items-center justify-center font-bold"
              >
                {recipe?.recipe?.label}
              </Text>
              <View className="px-4">
                <Text className="font-black text-base">
                  {recipe?.recipe?.ingredients?.length} Ingredients |{" "}
                  {recipe?.recipe?.totalTime} Min
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default RecipeComponent;
