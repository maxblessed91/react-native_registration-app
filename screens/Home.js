import React, { useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView, View } from "react-native";
import Container from "../components/Container";
import BigButtonBorder from "../base/BigButtonBorder";
import BigButtonNoBorder from "../base/BigButtonNoBorder";

import { Colors } from "../base/Colors";

function Home({ navigation }) {
    return (
        <Container>
            <View style={styles.view}>
                <Image
                    style={styles.image}
                    source={require("../assets/app-logo.jpg")}
                />
                <Text style={(styles.margin, styles.text)}>Image</Text>

                <BigButtonBorder
                    style={styles.margin}
                    title="Sign in with Facebook"
                    onPress={() => navigation.navigate("Facebook")}
                />
                <BigButtonBorder
                    title="Sign in with Twitter"
                    onPress={() => navigation.navigate("Twitter")}
                />

                <BigButtonBorder
                    onPress={() => navigation.navigate("SignUp")}
                />

                <BigButtonNoBorder
                    title="ALREADY REGISTERED? SIGN IN"
                    onPress={() => navigation.navigate("SignIn")}
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
    margin: {
        marginBottom: 20,
    },
    text: {
        color: Colors.white,
        marginBottom: 20,
    },
});

export default Home;
