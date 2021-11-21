import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Container({ children }) {
    return (
        <LinearGradient colors={["#FE7547", "#F5336F"]} style={styles.gradient}>
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    image: {
        position: "relative",
    },
});

export default Container;
