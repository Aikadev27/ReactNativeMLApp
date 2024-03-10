import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PopularModelCard({ modelName, imageUri, desc }) {
  const navigation = useNavigation();
  return (
    <View className="w-[250] h-[300]  mx-1 bg-slate-800 rounded-md px-4 py-1">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("modelDetail", {
            modelName: modelName,
            desc: desc,
          })
        }
        className="w-full h-[65%] border my-2"
      >
        <View>
          <Image
            source={{
              uri: `${imageUri}`,
            }}
            className="w-full h-full"
          />
        </View>
      </TouchableOpacity>
      <Text className="font-bold text-blue-400 text-sm uppercase my-1">
        Model name: <Text className="text-white lowercase">{modelName}</Text>
      </Text>
      <View>
        <Text
          className="font-bold text-blue-400 text-sm uppercase my-1 "
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          Model Description:{" "}
          <Text className="text-white  lowercase ">{desc}</Text>
        </Text>
      </View>
    </View>
  );
}
