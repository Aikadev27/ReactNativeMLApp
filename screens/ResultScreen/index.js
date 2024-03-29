import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function ResultScreen({ route }) {
  const { label, accuracy, imageUri } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 px-2 bg-black">
      <View className="my-3">
        <Text className="text-center uppercase font-bold text-cyan-500 text-xl">
          predicted results
        </Text>
      </View>
      <View className="w-full h-[250] p-4 bg-slate-200 rounded-md shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <Image
          source={{ uri: `${route.params.imageUri}` }}
          className="w-full h-full"
        />
      </View>
      <View className="w-full h-[200] bg-orange-600 my-4 p-4 flex justify-between">
        <View className="bg-white w-full h-[50%] flex flex-row items-center px-4 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-2">
          <Text className="text-left text-xl">Label of image : {label}</Text>
        </View>
        <View className="bg-white w-full h-[50%] flex flex-row items-center px-4 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-2">
          <Text className="text-left text-xl">
            Accuracy of image : {accuracy}
          </Text>
        </View>
      </View>

      <View className="w-full flex flex-row justify-between items-center px-10 my-20">
        <TouchableOpacity
          className="w-[100] h-[50] bg-lime-500 flex flex-row items-center justify-center rounded-xl"
          onPress={() => navigation.goBack()}
        >
          <Text>
            <Icon name="backward" size={30} color={"white"} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[100] h-[50] bg-gray-500 flex flex-row items-center justify-center rounded-xl "
          disabled={true}
        >
          <Text>
            <Icon name="bookmark" size={30} color={"white"} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
