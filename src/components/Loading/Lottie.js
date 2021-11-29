import React from "react";
import { StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";
import styles from "./styles";
export default function Lottie() {
  return (
    <View>
      <LottieView
        source={require("../../assets/animations/weatherAnimation.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
