import { CommonVerticalSwitchProps } from "@/interfaces/commonVerticalSwitchProps";
import React, { useRef, useState } from "react";
import { Text, Pressable, Animated } from "react-native";

const CommonVerticalSwitch: React.FC<CommonVerticalSwitchProps> = ({
  width,
  height,
  isChecked,
  onValueChange,
  onLabel,
  offLabel,
  textStyle,
  onColor,
  offColor,
  sliderWidth,
  sliderHeight,
  slideColor,
  borderRadius,
  animationDuration,
  disable = false,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [containerHeight, setContainerHeight] = useState(0);

  const toggleSwitch = () => {
    onValueChange(!isChecked);
    Animated.timing(animatedValue, {
      toValue: isChecked ? 0 : 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const switchPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [5, containerHeight - 35],
  });

  return (
    <Pressable
      disabled={disable}
      onPress={toggleSwitch}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setContainerHeight(height);
      }}
      className={`${width} ${height} ${
        isChecked ? offColor : onColor
      } rounded-2xl items-center justify-between`}
    >
      <Text className={textStyle}>{offLabel}</Text>
      <Animated.View
        style={{
          position: "absolute",
          top: switchPosition,
          width: sliderWidth,
          height: sliderHeight,
          backgroundColor: slideColor,
          borderRadius: borderRadius,
        }}
      />
      <Text className={textStyle}>{onLabel}</Text>
    </Pressable>
  );
};
export default CommonVerticalSwitch;
