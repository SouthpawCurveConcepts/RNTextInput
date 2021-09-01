import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

export const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "darkorange" }}>
        <Text>Crunchy</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <View style={{ backgroundColor: "pink" }}>
        <Text>Schwifty</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <View style={{ backgroundColor: "lightblue" }}>
        <Text>Rutabaga</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
