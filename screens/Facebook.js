import React, { useState } from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

function Facebook({ navigation }) {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}
        >
            <Text>Redirecting to Facebook page...</Text>
            <Button
                title="Go back"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

export default Facebook;
