import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import { Colors } from "../base/Colors";

export default function SmallButtonNoBorder(props) {
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 22,
        elevation: 3,
        width: "40%",
        marginTop: -12,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: Colors.white,
        textDecorationLine: "underline",
    },
});
