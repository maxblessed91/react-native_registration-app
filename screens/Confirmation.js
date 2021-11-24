import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

import Container from "./../components/Container";
import BigButtonBorder from "../base/BigButtonBorder";

import { Colors } from "../base/Colors";

function Confirmation({ navigation }) {
    return (
        <Container>
            <View style={styles.view}>
                <Text style={styles.welcome}>
                    Thank you for registration and Welcome to our community!
                </Text>
                <BigButtonBorder
                    title="Go Home"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    welcome: {
        color: Colors.white,
        fontSize: 24,
        alignItems: "center",
        textAlign: "center",
        marginBottom: 20,
    },
});

export default Confirmation;
