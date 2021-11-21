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
import ButtonB from "../base/ButtonB";
import ButtonNB from "../base/ButtonNB";
import ButtonSocial from "../base/ButtonSocial";

function SignIn({ navigation }) {
    return (
        <Container>
            <SafeAreaView
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Text style={styles.title}>SIGN IN</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Name"
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor="#FFFAE6"
                ></TextInput>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor="#FFFAE6"
                ></TextInput>
                <SafeAreaView style={styles.content}>
                    <Checkbox />
                    <Text style={styles.label}>Remember Password</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.buttonBlock}>
                    <ButtonB
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

                <ButtonNB
                    title="FORGOT PASSWORD?"
                    onPress={() => navigation.navigate("Restore")}
                />
            </SafeAreaView>
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
    textInput: {
        height: 40,
        width: "88%",
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    content: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 12,
    },
    label: {
        marginLeft: 14,
        color: "#fff",
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
    // buttonNoBorder: {
    //     paddingVertical: 12,
    //     paddingHorizontal: 12,
    // },
    // buttonBorder: {
    //     justifyContent
    // },
});

export default SignIn;
