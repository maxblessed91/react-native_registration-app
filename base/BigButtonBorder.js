import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import { Colors } from "../base/Colors";

export default function BigButtonBorder(props) {
    const { onPress, title = "Sign Up" } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: Colors.white,
        width: "88%",
        marginBottom: 16,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: Colors.orange,
    },
});
