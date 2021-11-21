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
import ButtonBSmall from "../base/ButtonBSmall";
import ButtonNBSmall from "../base/ButtonNBSmall";
import ButtonNB from "../base/ButtonNB";

function SignUp({ navigation }) {
    return (
        <Container>
            <SafeAreaView
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Text style={styles.title}>CREATE YOUR LOGIN</Text>

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
                <TextInput
                    style={styles.textInput}
                    placeholder="Re-Enter Password"
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor="#FFFAE6"
                ></TextInput>
                <SafeAreaView style={styles.content}>
                    <Checkbox />
                    <Text style={styles.label}>
                        Agree to Terms & Conditions
                    </Text>
                </SafeAreaView>
                <SafeAreaView style={styles.buttonBlock}>
                    <ButtonNBSmall
                        style={styles.buttonNoBorder}
                        title="CANCEL"
                        onPress={() => navigation.navigate("Home")}
                    />
                    <ButtonBSmall
                        style={styles.buttonBorder}
                        title="SAVE"
                        onPress={() => navigation.navigate("Confirmation")}
                    />
                </SafeAreaView>
                <ButtonNB
                    title="Agree to Terms & Conditions"
                    onPress={() => navigation.navigate("Policy")}
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
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        marginTop: 20,
    },
    // buttonNoBorder: {
    //     paddingVertical: 12,
    //     paddingHorizontal: 12,
    // },
    // buttonBorder: {
    //     paddingVertical: 12,
    //     paddingHorizontal: 12,
    // },
});

export default SignUp;
