import { CommonImageCardProps } from "@/interfaces/commonImageCardProps";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const CommonImageCard: React.FC<CommonImageCardProps> = ({
  image,
  roomName,
  roomCount,
  imageStyles,
  roomNameStyles,
  roomCountStyles,
}) => {
  return (
    <ImageBackground source={image} className={imageStyles} resizeMode="cover">
      <View>
        <View className=" absolute bg-white opacity-30 w-full h-full" />
        <Text className={roomNameStyles}>{roomName}</Text>
        <Text className={roomCountStyles}>{roomCount}</Text>
      </View>
    </ImageBackground>
  );
};

export default CommonImageCard;
