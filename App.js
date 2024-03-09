import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import PredictionHistory from "./screens/PredictionHistory";
import { View, Text } from "react-native";
import ModelDetail from "./screens/ModelDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,

  tabBarStyle: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
  },
};

const iconSize = 30;

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen
        name="history"
        component={PredictionHistory}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <MaterialIcons
                  name="history-edu"
                  size={iconSize}
                  color={focused ? "cyan" : "white"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <AntDesign
                  name="home"
                  size={iconSize}
                  color={focused ? "cyan" : "white"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <AntDesign
                  name="user"
                  size={iconSize}
                  color={focused ? "cyan" : "white"}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerBackVisible: true,
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="history" component={PredictionHistory} />
      <Stack.Screen name="modelDetail" component={ModelDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <TabNavigator />
    </NavigationContainer>
  );
}
