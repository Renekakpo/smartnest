import { CommonRoomTypeProps } from "@/interfaces/commonRoomTypeProps";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function RoomTypeItem({
  item,
  isSelected,
  onSelect,
}: CommonRoomTypeProps) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View
        className={`h-10 ${
          isSelected ? "bg-blue-500" : "bg-gray-100  border border-gray-300"
        } py-2 px-4 mx-2 rounded-lg justify-center`}
      >
        <Text
          className={`${isSelected ? "text-white font-bold" : "font-normal"}`}
        >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
