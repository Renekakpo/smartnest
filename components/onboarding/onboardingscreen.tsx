import slides from "@/app/data/slides";
import React from "react";
import { useState, useRef } from "react";
import {
  FlatList,
  Text,
  View,
  Animated,
  ViewToken,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import OnboardingItem from "./onboardingItem";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CommonButton from "../common/commonButton";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      const updatedIndex = viewableItems[0].index ?? 0;
      setCurrentIndex(updatedIndex);
    }
  );

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNextPress = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slidesRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    } else {
      setCurrentIndex(0);
      slidesRef.current?.scrollToIndex({
        animated: true,
        index: 0,
      });
    }
  };

  const handleSkipPress = () => {
    alert("Skip pressed");
  };

  return (
    <View className="flex-1">
      <FlatList
        className="flex-1"
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={() => viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <CommonButton
        onPress={handleSkipPress}
        text="skip"
        buttonStyles="absolute top-12 right-4"
        textStyles="text-white text-sm uppercase font-semibold"
      />

      <View className="absolute bottom-0 w-full h-20 flex flex-row items-center justify-between">
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.3)", "bg-black"]}
          start={{ x: 0, y: 0 }} // Start from the top
          end={{ x: 0, y: 1 }} // End at the bottom
          className="absolute w-full h-full"
        />
        <ExpandingDot
          data={slides}
          expandingDotWidth={20}
          scrollX={scrollX}
          inActiveDotColor="#fff"
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 7,
            height: 7,
            backgroundColor: "bg-blue-600",
            borderRadius: 5,
            marginHorizontal: 5,
            alignSelf: "center",
            paddingStart: 10,
          }}
          containerStyle={{
            top: 0,
          }}
        />
        <TouchableOpacity
          onPress={handleNextPress}
          className="absolute right-0 bg-blue-600 rounded-full w-11 h-11 mr-3 items-center justify-center"
        >
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
