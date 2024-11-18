import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  useWindowDimensions,
} from "react-native";
import CommonToolbar from "../common/commonToolbar";
import RoomTypeItem from "./roomTypeItem";
import RoomItem from "./roomItem";
import rooms from "@/app/data/rooms";
import CommonButton from "../common/commonButton";

const DEVICES = [
  {
    id: "1",
    name: "Bed Room",
  },
  {
    id: "2",
    name: "Kitchen Room",
  },
  {
    id: "3",
    name: "Living Room",
  },
  {
    id: "4",
    name: "Rest Room",
  },
];

export default function RoomsScreen({ navigation }: any) {
  const { width } = useWindowDimensions();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const flatListRef = useRef<FlatList>(null); // Reference to FlatList

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSelect = (itemId: string, index: number) => {
    setSelectedItem(itemId);
    // Scroll to the selected item's index
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };

  const handleAddNewRoom = () => {
    alert("Add new room!");
  };

  return (
    <View className="flex-col flex-1">
      <CommonToolbar
        title="Rooms"
        titleStyle="text-black text-xl font-bold"
        toolbarStyle="flex-row bg-white p-4 items-center justify-between"
        showLeadingIcon={true}
        showTrailingIcon={false}
        leadingIcon="arrow-back-ios"
        handleLeadingIconPressed={handleBackPress}
      />
      <FlatList
        className="my-2 h-12"
        data={DEVICES}
        renderItem={({ index, item }) => (
          <RoomTypeItem
            item={item.name}
            isSelected={selectedItem === item.id}
            onSelect={() => handleSelect(item.id, index)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        ref={flatListRef}
      />
      <FlatList
        className="flex-grow my-2"
        data={rooms}
        renderItem={({ index, item }) => <RoomItem item={item} />}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
      />
      <CommonButton
        onPress={handleAddNewRoom}
        text="Add new room"
        buttonStyles="left-0 right-0 w-3/4 bg-white p-4 m-x4 my-2 rounded-2xl border border-blue-500 items-center"
        textStyles="text-base text-blue-500 font-bold"
      />
    </View>
  );
}
