import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CommonButton from "./common/commonButton";
import CommonInputField from "./common/commonInputField";
import CommonSuccessPopup from "./common/commonSuccessPopup";
import Checkbox from "expo-checkbox";
import CommonToolbar from "./common/commonToolbar";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUsagePolicy, setUsagePolicy] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleFormChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleBackPress = () => {
    alert("Should navigate back to previous screen!");
  };

  const onSignUpPressed = () => {
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    alert("Will navigate to home on success sign up!");
  };

  return (
    <View className="flex-1">
      <CommonToolbar
        title="Sign Up"
        titleStyle="text-white text-lg font-medium"
        toolbarStyle="flex-row p-4 items-center"
        showLeadingIcon={true}
        showTrailingIcon={false}
        leadingIcon="left"
        leadingIconColor="black"
        handleLeadingIconPressed={handleBackPress}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          keyboardShouldPersistTaps="handled"
          overScrollMode="never"
        >
          <View className="px-8 top-10">
            <Text className="text-black text-2xl font-medium">
              Create an account
            </Text>
            <Text className="text-gray-400 text-ms font-normal">
              Looks like you don't have an account. Let's create a new account
              for you.
            </Text>
            <CommonInputField
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => handleFormChange("fullName", value)}
              placeholder="Enter your full name..."
              keyboardType="default"
            />
            <CommonInputField
              label="Email"
              value={form.email}
              onChangeText={(value) => handleFormChange("email", value)}
              placeholder="Enter your email..."
              keyboardType="email-address"
            />
            <CommonInputField
              label="Phone Number"
              value={form.phoneNumber}
              onChangeText={(value) => handleFormChange("phoneNumber", value)}
              placeholder="(000) 00000000"
              keyboardType="phone-pad"
            />
            <CommonInputField
              label="Password"
              value={form.password}
              onChangeText={(value) => handleFormChange("password", value)}
              placeholder="Enter your password..."
              secureTextEntry={!showPassword}
              toggleSecureTextEntry={() => setShowPassword(!showPassword)}
              showToggleIcon={true}
            />
            <CommonInputField
              label="Confirm password"
              value={form.confirmPassword}
              onChangeText={(value) =>
                handleFormChange("confirmPassword", value)
              }
              placeholder="Enter the same password..."
              enterKeyHint="done"
              secureTextEntry={!showConfirmPassword}
              toggleSecureTextEntry={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              showToggleIcon={true}
            />
            <View className="flex-row items-center space-x-2 mt-4">
              <Checkbox
                value={isUsagePolicy}
                onValueChange={setUsagePolicy}
                testID="usage_policy_ckecbox"
              />
              <Text className="text-black">I accept terms & conditions</Text>
            </View>
            <CommonButton
              onPress={onSignUpPressed}
              text="Sign Up"
              buttonStyles="w-full bg-blue-500 p-3 mt-8 rounded-2xl items-center justify-center"
              textStyles="text-base text-white font-bold"
            />
            <CommonSuccessPopup
              title="Congratulation!"
              description="You have created your account."
              buttonLabel="Get Started"
              visible={isModalVisible}
              onClose={handleCloseModal}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
