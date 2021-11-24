import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

function Facebook({ navigation }) {
    return (
        <View style={styles.view}>
            <Text>Redirecting to Twitter page...</Text>
            <Button
                title="Go back"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});

export default Facebook;
