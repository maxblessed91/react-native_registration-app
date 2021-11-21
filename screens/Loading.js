import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

import Container from "./../components/Container";
import ButtonB from "../base/ButtonB";

function Loading({ navigation }) {
    return (
        <Container>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Text style={styles.loading}>The page is loading...</Text>
                <ButtonB
                    title="Temporary btn"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    loading: {
        color: "white",
        fontSize: 24,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 20,
    },
});

export default Loading;
