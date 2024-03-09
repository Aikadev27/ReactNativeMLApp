import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import PopularModelCard from "../../components/PopularModelCard";
import ThinModelCard from "../../components/ThinModelCard";
const imgUri = "https://img.ntdvn.net/2021/06/ntdvn_ch-541310-1920.jpg";
const emptyImageModel =
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg";
const fakeData = [
  {
    id: 1,
    imgUri: imgUri,
    modelName: "Bệnh trên lúa",
    desc: "nhận dạng và phân loại bệnh do vi khuẩn trên cây lúa",
  },
  {
    id: 2,
    imgUri: emptyImageModel,
    modelName: "model2",
    desc: "desc2",
  },
  {
    id: 3,
    imgUri: emptyImageModel,
    modelName: "model3",
    desc: "desc3",
  },
  {
    id: 4,
    imgUri: emptyImageModel,
    modelName: "model4",
    desc: "desc43",
  },
];

export default function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState("");

  return (
    <SafeAreaView className="h-full bg-stone-900 pb-16">
      <ScrollView>
        {/* search bar */}
        <View className="mt-20 mx-5 flex flex-row  justify-start p-2 bg-white rounded-xl shadow">
          <TextInput
            className="flex-1 text-left text-black px-2 ml-2 bg-white "
            placeholder="Type any..."
            onChangeText={(newText) => setInputText(newText)}
          ></TextInput>
          <View className="  border-gray-300 flex justify-center ">
            <Text className="font-bold">
              <Icon.Button
                name="search"
                size={12}
                color="white"
                backgroundColor="darkblue"
                onPress={() => console.log(inputText)}
              >
                search
              </Icon.Button>
            </Text>
          </View>
        </View>
        {/* popular model cards */}
        <View className="mx-3">
          {/* 2 text */}
          <View className="flex flex-row justify-between my-4 px-2">
            <Text className="text-blue-600 text-sm font-bold">Popular</Text>
            <Text className="text-white text-xs font-thin italic">
              Show all
            </Text>
          </View>
          {/* model list  */}

          <View>
            <FlatList
              data={fakeData.slice(0, 3)}
              renderItem={({ item }) => {
                return (
                  <View key={item.id}>
                    <PopularModelCard
                      imageUri={item.imgUri}
                      modelName={item.modelName}
                      desc={item.desc}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              // scrollEnabled={false}
              // nestedScrollEnabled={true}
            />
          </View>
        </View>

        {/* all model */}
        <View className="mx-2">
          {/* 2 text */}
          <View className="flex flex-row justify-between my-4 px-2 ">
            <Text className="text-orange-600 text-sm font-bold">Features</Text>
            <Text className="text-white text-xs font-thin italic">
              Show all
            </Text>
          </View>

          {/* all features model list */}
          <View className="mx-2">
            <FlatList
              data={fakeData.slice(0, 4)}
              renderItem={({ item }) => {
                return (
                  <View key={item.id}>
                    <ThinModelCard
                      imageUri={item.imgUri}
                      desc={item.desc}
                      modelName={item.modelName}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
