import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function ButtonB(props) {
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
        borderRadius: 26,
        elevation: 3,
        backgroundColor: "white",
        width: "48%",
        marginBottom: 16,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#FE7547",
    },
});
