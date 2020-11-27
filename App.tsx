import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";

const leftNum;
const rightNum;

if (TextInput === Int) {
  switch (key) {
    case value:
      break;

    default:
      break;
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>計算結果</Text>
      <TextInput>leftNum</TextInput>
      <TextInput>rightNum</TextInput>
      <Pressable>
        <button>aaaa</button>
      </Pressable>
      <Pressable>-</Pressable>
      <Pressable>C</Pressable>
      <Pressable>×</Pressable>
      <Pressable>÷</Pressable>
      <StatusBar style="auto" />
    </View>
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
