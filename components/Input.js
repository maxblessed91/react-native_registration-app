import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { Colors } from "../base/Colors";

export default function Input(props) {
    const {
        placeholder = "Enter Email",
        placeholderTextColor = Colors.coralWhite,
    } = props;
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={placeholderTextColor}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: "88%",
        marginBottom: 30,
        color: Colors.white,
        borderBottomColor: Colors.white,
        borderBottomWidth: 1,
    },
});
