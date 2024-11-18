import { Room } from "@/app/data/model/room";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

export default function RoomItem({ item }: { item: Room }) {
  return (
    <View className="relative w-50 h-64 m-4 shadow-md shadow-gray-400 rounded-2xl overflow-hidden">
      {/* Adjust height or width as per your need */}
      <ImageBackground
        source={item.image}
        className="w-full h-full"
        resizeMode="cover"
      >
        {/* Content over the image */}
        <View className="absolute w-full flex-row justify-between bg-gray-200 bottom-0 p-2">
          <View className="flex-col">
            <Text>{item.name}</Text>
            <Text>
              {item.deviceConnected}/{item.deviceAvailable} is on
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Feather name="wind" size={24} color="black" />
            <MaterialIcons name="light" size={24} color="black" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
