import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Facebook from "./screens/Facebook";
import Twitter from "./screens/Twitter";
import Confirmation from "./screens/Confirmation";
import Loading from "./screens/Loading";
import Policy from "./screens/Policy";
import Restore from "./screens/Restore";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Facebook" component={Facebook} />
                <Stack.Screen name="Twitter" component={Twitter} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Confirmation" component={Confirmation} />
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Policy" component={Policy} />
                <Stack.Screen name="Restore" component={Restore} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
