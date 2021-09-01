import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UselessTextInput } from "./src/infrastructure/typography/textinput";

export default function App() {
  return (
    <UselessTextInput />
    // <View style={styles.container}>
    //   <Text>Replace this with a TextInput!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
