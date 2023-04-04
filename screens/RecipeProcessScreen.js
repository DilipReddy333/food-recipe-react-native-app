import { Text, View, TouchableOpacity, Linking } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

const RecipeProcessScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const recipe = { ...route.params.recipe.recipe };
  // console.log(recipe);
  const nutrients = [
    recipe?.totalNutrients?.CA,
    recipe?.totalNutrients?.CHOLE,
    recipe?.totalNutrients?.ENERC_KCAL,
    recipe?.totalNutrients?.FAT,
    recipe?.totalNutrients?.FE,
    recipe?.totalNutrients?.SUGAR,
    recipe?.totalNutrients?.WATER,
  ];
  return (
    <View className="p-2">
      <View className="flex-row items-center justify-between bg-gray-200 p-2 rounded-md ">
        {/* back arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-8 h-8 rounded-full text-center shadow-md flex items-center justify-center bg-white  flex-none"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text className="text-center text-base font-bold">
            Recipe Processing
          </Text>
        </View>
      </View>
      <View className="mt-2">
        <Text className="text-base font-medium text-center">
          How to Make {recipe?.label}
        </Text>
      </View>
      <View className="mt-2">
        <Text className="font-bold text-xl text-[#2b9239]">Nutritions</Text>
      </View>
      <View className="mt-2 flex-row items-center justify-between flex-wrap">
        {nutrients?.map((nutrient, i) => {
          if (nutrient?.quantity) {
            return (
              <View className="mb-[4px]" key={i}>
                <CircularProgress
                  radius={50}
                  value={nutrient?.quantity / 100}
                  textColor="#d8f3e1"
                  fontSize={20}
                  valueSuffix={nutrient?.unit}
                  inActiveStrokeColor={"#2ecc71"}
                  activeStrokeWidth={6}
                  title={nutrient?.label}
                  titleColor={"#0a756b"}
                  titleStyle={{ fontWeight: "bold", fontSize: 12 }}
                  inActiveStrokeOpacity={0.2}
                  duration={1000}
                />
              </View>
            );
          }
        })}
      </View>
      {/* steps to cook section */}
      <View className="mt-2">
        <Text className="text-center text-lg font-semibold italic">
          Steps to Cook
        </Text>
        <View className="mt-3 w-full h-[40%] rounded-lg bg-gray-300 p-2">
          <Text>Follow this link to make your delicious</Text>
          <Text className="text-sm text-center font-bold">{recipe?.label}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${recipe.url}`)}
            className="mt-3"
          >
            <Text numberOfLines={1} className="text-blue-500">
              {recipe.url}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecipeProcessScreen;
