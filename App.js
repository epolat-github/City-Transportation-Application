import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationContainer from "./src/navigation/NavigationContainer";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { PRIMARY_COLOR } from "./src/utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY_COLOR,
        // accent: "#f1c40f",
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <StatusBar style="dark" />
                <NavigationContainer />
            </SafeAreaProvider>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
