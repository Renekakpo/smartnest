import AuthOptions from "@/components/authOptions";
import CommonVerticalSwitch from "@/components/common/commonVerticalSwitch";
import HomeScreen from "@/components/home-stack/homeScreen";
import HomeSetupScreen from "@/components/home-stack/homeSetupScreen";
import BottomNavBar from "@/components/navigation/bottomNavBar";
import OnboardingScreen from "@/components/onboarding/onboardingscreen";
import SignInScreen from "@/components/signinScreen";
import SignUpScreen from "@/components/signUpScreen";
import React, { useState } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function Index() {
  const [checked, setChecked] = useState(false);
  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <BottomNavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
