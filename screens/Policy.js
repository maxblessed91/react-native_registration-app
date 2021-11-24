import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

import Container from "./../components/Container";
import BigButtonBorder from "../base/BigButtonBorder";

import { Colors } from "../base/Colors";

function Policy({ navigation }) {
    return (
        <Container>
            <View style={styles.view}>
                <Text style={styles.header}>OUR POLICY</Text>
                <Text style={styles.policy}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Text>
                <BigButtonBorder
                    title="Back to Sign Up"
                    onPress={() => navigation.navigate("SignUp")}
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
    header: {
        color: Colors.coralWhite,
        fontSize: 24,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 20,
    },
    policy: {
        color: Colors.white,
        fontSize: 18,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        marginBottom: 20,
        paddingHorizontal: 16,
    },
});

export default Policy;
