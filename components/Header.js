import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vincent: Ain't hhungry.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: 120,
    backgroundColor: "#ffc",
  },
  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
