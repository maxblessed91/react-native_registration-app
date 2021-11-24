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
import SmallButtonBorder from "../base/SmallButtonBorder";
import SmallButtonNoBorder from "../base/SmallButtonNoBorder";
import BigButtonNoBorder from "../base/BigButtonNoBorder";
import Input from "../components/Input";

import { Colors } from "../base/Colors";

function SignUp({ navigation }) {
    return (
        <Container>
            <SafeAreaView style={styles.view}>
                <Text style={styles.title}>CREATE YOUR LOGIN</Text>

                <Input />
                <Input placeholder="Password" />
                <Input placeholder="Re-Enter Password" />
                <SafeAreaView style={styles.content}>
                    <Checkbox />
                    <Text style={styles.label}>
                        Agree to Terms & Conditions
                    </Text>
                </SafeAreaView>
                <SafeAreaView style={styles.buttonBlock}>
                    <SmallButtonNoBorder
                        style={styles.buttonNoBorder}
                        title="CANCEL"
                        onPress={() => navigation.navigate("Home")}
                    />
                    <SmallButtonBorder
                        style={styles.buttonBorder}
                        title="SAVE"
                        onPress={() => navigation.navigate("Confirmation")}
                    />
                </SafeAreaView>
                <BigButtonNoBorder
                    title="Agree to Terms & Conditions"
                    onPress={() => navigation.navigate("Policy")}
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
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        marginTop: 20,
    },
});

export default SignUp;
