import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../base/Colors";

function MyCheckbox() {
    const [checked, onChange] = useState(true);

    function onCheckmarkPress() {
        onChange(!checked);
    }

    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={onCheckmarkPress}
        >
            {checked && <Ionicons name="checkmark" size={13} color="white" />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 14,
        height: 14,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: Colors.coral,
        backgroundColor: "transparent",
    },

    checkboxChecked: {
        backgroundColor: Colors.coral,
    },
});

export default MyCheckbox;
