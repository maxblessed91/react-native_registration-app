import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    View,
} from "react-native";
import Container from "../components/Container";
import Checkbox from "../base/Checkbox";
import BigButtonBorder from "../base/BigButtonBorder";
import BigButtonNoBorder from "../base/BigButtonNoBorder";
import ButtonSocial from "../base/ButtonSocial";
import Input from "../components/Input";

import { Colors } from "../base/Colors";

function SignIn({ navigation }) {
    return (
        <Container>
            <SafeAreaView style={styles.view}>
                <Text style={styles.title}>SIGN IN</Text>

                <Input placeholder="Enter Name" />
                <Input placeholder="Password" />
                <SafeAreaView style={styles.content}>
                    <Checkbox />
                    <Text style={styles.label}>Remember Password</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.buttonBlock}>
                    <BigButtonBorder
                        style={styles.buttonBorder}
                        title="GET STARTED"
                        onPress={() => navigation.navigate("Loading")}
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.buttonBlock}>
                    <ButtonSocial
                        style={styles.buttonBorder}
                        title="F"
                        onPress={() => navigation.navigate("Facebook")}
                    />
                    <ButtonSocial
                        style={styles.buttonBorder}
                        title="T"
                        onPress={() => navigation.navigate("Twitter")}
                    />
                </SafeAreaView>

                <BigButtonNoBorder
                    title="FORGOT PASSWORD?"
                    onPress={() => navigation.navigate("Restore")}
                />
            </SafeAreaView>
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
    content: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
    },
    title: {
        color: Colors.white,
        fontSize: 24,
        marginBottom: 12,
    },
    label: {
        marginLeft: 14,
        color: Colors.white,
        fontSize: 11,
        letterSpacing: 0.5,
    },
    buttonBlock: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        width: "90%",
        marginTop: 20,
    },
});

export default SignIn;
