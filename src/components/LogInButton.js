import React from "react";
import {StyleSheet, TouchableOpacity, Text } from "react-native";

const LoginButton = ({ onPress, title }) => (
    <TouchableOpacity 
        onPress={onPress} 
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    
    appButtonContainer: {
      marginTop: 10,
      backgroundColor: "#b3b3b3",
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 12,
      height:50
    },
    appButtonText: {
      fontSize: 15,
      color: "#858585",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

  export default LoginButton;