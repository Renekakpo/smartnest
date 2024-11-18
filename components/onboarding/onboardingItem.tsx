import { Slide } from "@/app/data/model/slide";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

export default function OnboardingItem({ item }: { item: Slide }) {
  const { width } = useWindowDimensions();

  return (
    <ImageBackground
      source={item.image}
      className="flex-1"
      style={[{ width: width }]}
      resizeMode="cover"
    >
      <View className="w-full absolute bottom-20">
        <Text className="text-white text-xl font-bold px-4">{item.title}</Text>
        <Text className="text-neutral-300 text-sm text-justify truncate  px-4">
          {item.description}
        </Text>
      </View>
    </ImageBackground>
  );
}
