import React, { useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView, View } from "react-native";
import Container from "../components/Container";
import ButtonB from "../base/ButtonB";
import ButtonNB from "../base/ButtonNB";

function Home({ navigation }) {
    return (
        <Container>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Image
                    style={styles.image}
                    source={require("../assets/asd2.jpg")}
                />
                <Text style={(styles.margin, styles.text)}>Image</Text>

                <ButtonB
                    style={styles.margin}
                    title="Sign in with Facebook"
                    onPress={() => navigation.navigate("Facebook")}
                />
                <ButtonB
                    title="Sign in with Twitter"
                    onPress={() => navigation.navigate("Twitter")}
                />

                <ButtonB onPress={() => navigation.navigate("SignUp")} />

                <ButtonNB
                    title="ALREADY REGISTERED? SIGN IN"
                    onPress={() => navigation.navigate("SignIn")}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    margin: {
        marginBottom: 20,
    },
    text: {
        color: "white",
        marginBottom: 20,
    },
});

export default Home;
