import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import CommonButton from "./common/commonButton";
import CommonSocialButton from "./common/commonSocialButton";

const IMAGES = {
  backgroundImage: require("../assets/images/auth_options/bg-image.png"),
  facebookLogo: require("../assets/images/auth_options/logo/facebook/facebook_logo.png"),
  googleLogo: require("../assets/images/auth_options/logo/google/google_logo.png"),
};

export default function AuthOptions() {
  const { width } = useWindowDimensions();

  const onCreateAnAccountButtonClicked = () => {};
  const onSignInButtonClicked = () => {};
  const onFacebookSocialButtonclicked = () => {};
  const onGoogleSocialButtonclicked = () => {};

  return (
    <ImageBackground
      source={IMAGES.backgroundImage}
      resizeMode="cover"
      className="flex-1"
      style={[{ width: width }]}
    >
      <View className="flex-1 top-28 items-center">
        <Text className="text-2xl text-white font-bold">
          Smart
          <Text className="text-amber-400">Nest</Text>
        </Text>
        <Text className="text-white font-normal justify-center">
          Your home, your way - with our smart app!
        </Text>
      </View>

      <View className="flex flex-1 flex-col p-8 justify-end">
        <CommonButton
          onPress={onCreateAnAccountButtonClicked}
          text="Create an account"
          buttonStyles="w-full bg-blue-500 p-4 rounded-2xl items-center justify-center"
          textStyles="text-base text-white font-bold"
        />
        <CommonButton
          onPress={onSignInButtonClicked}
          text="Sign In"
          buttonStyles="w-full bg-white p-4 mt-6 rounded-2xl border-2 border-blue-500 items-center justify-center"
          textStyles="text-base text-blue-500 font-bold"
        />

        <View className="flex-row items-center pt-8">
          <View className="flex-1 border-b border-gray-700 opacity-60" />
          <Text className="flex-2 px-4 text-light text-gray">Sign in with</Text>
          <View className="flex-1 border-b border-gray-800 opacity-60" />
        </View>

        <View className="flex-row items-center pt-6">
          <CommonSocialButton
            onPress={onFacebookSocialButtonclicked}
            logo={IMAGES.facebookLogo}
            buttonStyles="flex-1 bg-gray-200 p-4 rounded-2xl mr-4 items-center justify-center"
          />
          <CommonSocialButton
            onPress={onGoogleSocialButtonclicked}
            logo={IMAGES.googleLogo}
            buttonStyles="flex-1 bg-gray-200 p-4 rounded-2xl mr-4 items-center justify-center"
          />
          <CommonSocialButton
            onPress={onGoogleSocialButtonclicked}
            logo={IMAGES.googleLogo}
            buttonStyles="flex-1 bg-gray-200 p-4 rounded-2xl items-center justify-center"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
