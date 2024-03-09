import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ThinModelCard({ modelName, desc, imageUri }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="w-full h-[70] bg-gray-600 my-2 rounded-lg p-1 border  flex justify-center"
      onPress={() => navigation.navigate("modelDetail")}
    >
      <View className=" flex flex-row justify-between ">
        <Image source={{ uri: `${imageUri}` }} width={100} height={50} />
        <View className="ml-2  flex-1 bg-white px-2 justify-center items-start rounded-lg">
          <Text className="text-xs  font-bold text-indigo-700">
            Model Name:{" "}
            <Text className="lowercase italic font-light text-black">
              {modelName}
            </Text>
          </Text>
          <Text
            className="text-xs  font-bold text-indigo-700"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            Desc:{" "}
            <Text className="lowercase italic font-light text-black">
              {desc}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
