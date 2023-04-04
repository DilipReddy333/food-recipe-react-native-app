import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import RecipeProcessScreen from "./screens/RecipeProcessScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home Screen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Discover Screen"
                component={DiscoverScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Recipe Details"
                component={RecipeDetailsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Recipe Process Screen"
                component={RecipeProcessScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
