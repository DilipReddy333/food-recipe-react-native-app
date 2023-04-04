import {
  Image,
  Text,
  View,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const IngredientComponent = ({ ingredient }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View className="p-2 relative">
      {/* view for image and name */}
      <View
        className="w-full h-[65px] bg-white shadow-md px-1 rounded-md flex-row items-center justify-between"
        key={ingredient.totalWeight}
      >
        <Pressable onPress={() => setShowModal(true)}>
          <Image
            className="w-[60px] h-[60px] object-contain rounded-full"
            source={{
              uri: ingredient.image,
            }}
          />
        </Pressable>
        <Text className="text-base font-semibold">{ingredient.food}</Text>
      </View>
      <View className="mt-1">
        <Text className="text-gray-400 font-normal">{ingredient.text}</Text>
      </View>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            alert("modal has been closed");
            setShowModal(!showModal);
          }}
        >
          <View className="flex items-center justify-center w-full h-[45%] mt-12">
            <View className="w-full h-full relative p-2 flex items-center justify-center mt-12  shadow-md bg-gray-300">
              <ImageBackground
                source={{ uri: ingredient.image }}
                className="w-full h-full rounded-md object-contain"
              >
                <Pressable
                  onPress={() => setShowModal(false)}
                  className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center absolute right-3 top-3"
                >
                  <Entypo name="cross" size={28} color="black" />
                </Pressable>
              </ImageBackground>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default IngredientComponent;
