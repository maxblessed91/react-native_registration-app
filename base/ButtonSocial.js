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
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 51 / 2,
        elevation: 3,
        backgroundColor: "white",
        marginHorizontal: 12,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#FE7547",
    },
});
