import {
  Button,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        className="w-full h-full object-cover"
        source={{
          uri: "https://media.gettyimages.com/id/635920906/photo/pasta-ingredients.jpg?s=612x612&w=0&k=20&c=5L2zmGpZ7_i0TR7YSENEd5tAQUJ1_tw_TY4e220wBak=",
        }}
      >
        <View className="flex items-center justify-center h-full">
          <Animatable.Text
            animation={"bounceIn"}
            className="text-center text-white text-4xl px-2 py-1 font-bold leading-10"
          >
            Cooking Experience Like a Chef
          </Animatable.Text>
          <View className="flex items-center justify-center w-3/4">
            <Animatable.Text
              animation={"bounceInRight"}
              delay={1000}
              className="text-center text-white text-base font-semibold"
            >
              Let's make a delicious dish with the best recipe for the family
            </Animatable.Text>
          </View>
          <Animatable.View
            animation={"fadeInUpBig"}
            className="flex items-center justify-between h-1/4 absolute -bottom-3"
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover Screen")}
              className=" flex-row items-center justify-evenly rounded-r-full rounded-l-full bg-emerald-300 w-5/6 px-6 pr-2 py-6 relative"
            >
              <View className="h-14 w-14 bg-white rounded-full absolute left-2 flex items-center justify-center">
                <Entypo
                  name="arrow-long-right"
                  size={32}
                  style={{ color: "#50c878" }}
                />
              </View>
              <Animatable.Text
                animation={"pulse"}
                easing={"ease-in-out"}
                iterationCount={"infinite"}
                className="text-white font-bold text-xl"
              >
                Get Started
              </Animatable.Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
