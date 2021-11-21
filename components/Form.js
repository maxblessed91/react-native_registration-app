import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Ввести новую задачу"
      />
      <Button
        color="green"
        onPress={() => addHandler(text)}
        title="Добавить задачу"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});
