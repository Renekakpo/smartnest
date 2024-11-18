import React, { useEffect, useRef } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from "react-native";

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  const { width } = useWindowDimensions();
  const focusedIndex = state.index;

  // Define the widths for each tab index
  const tabWidths = [
    width * 0.092, // Home
    width * 0.13, // Device
    width * 0.145, // Analytics
    width * 0.15, // History
    width * 0.153, // Camera
  ];

  // Animated value for the left position of the indicator
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  // Update the animated position when the focusedIndex changes
  useEffect(() => {
    const tabWidth = tabWidths[focusedIndex];
    const leftPosition = (focusedIndex + 1) * tabWidth; // Calculate the left position

    Animated.timing(indicatorPosition, {
      toValue: leftPosition, // Target position
      duration: 200, // Duration of the animation
      useNativeDriver: false, // Disable native driver for left property
    }).start();
  }, [focusedIndex]);

  // Get the current tab width based on the focused index
  const tabWidth = tabWidths[focusedIndex];

  return (
    <View className="bg-white rounded-xl shadow-2xl shadow-blue-500 mx-2 relative">
      <View className="absolute h-full w-full flex justify-end items-start">
        <Animated.View
          className="h-1 bg-blue-500 rounded"
          style={{
            width: "10%",
            left: indicatorPosition,
          }} // Adjust based on the focused tab
        />
      </View>
      <View className="flex-row justify-between px-6 py-2">
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const isFocused = focusedIndex === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const TabIcon = () => {
            switch (route.name) {
              case "HomeNavGraph":
                return (
                  <Feather
                    name="home"
                    size={24}
                    color={isFocused ? "#2563eb" : "gray"}
                  />
                );
              case "Network":
                return (
                  <MaterialIcons
                    name="wifi-tethering"
                    size={24}
                    color={isFocused ? "#2563eb" : "gray"}
                  />
                );
              case "Analytics":
                return (
                  <Feather
                    name="bar-chart-2"
                    size={24}
                    color={isFocused ? "#2563eb" : "gray"}
                  />
                );
              case "History":
                return (
                  <Feather
                    name="clock"
                    size={24}
                    color={isFocused ? "#2563eb" : "gray"}
                  />
                );
              case "Camera":
                return (
                  <Feather
                    name="video"
                    size={24}
                    color={isFocused ? "#2563eb" : "gray"}
                  />
                );
              default:
                return null;
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              className={`flex-1 items-center justify-center py-2 rounded-full ${
                isFocused ? "" : ""
              }`}
            >
              <TabIcon />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
