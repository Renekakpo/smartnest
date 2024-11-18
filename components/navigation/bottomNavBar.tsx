import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./customTabBar";
import HomeNavGraph from "./homeNavGraph";

const Tab = createBottomTabNavigator();

// Dummy screens for each tab
const NetworkScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>Network Screen</Text>
  </View>
);
const AnalyticsScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>Analytics Screen</Text>
  </View>
);
const HistoryScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>History Screen</Text>
  </View>
);
const CameraScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>Camera Screen</Text>
  </View>
);

export default function BottomNavBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeNavGraph" component={HomeNavGraph} />
      <Tab.Screen name="Network" component={NetworkScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
    </Tab.Navigator>
  );
}
