import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

import Container from "./../components/Container";
import ButtonB from "../base/ButtonB";

function Policy({ navigation }) {
    return (
        <Container>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
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
                <ButtonB
                    title="Back to Sign Up"
                    onPress={() => navigation.navigate("SignUp")}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "#FFFAE6",
        fontSize: 24,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 20,
    },
    policy: {
        color: "white",
        fontSize: 18,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 20,
    },
});

export default Policy;
