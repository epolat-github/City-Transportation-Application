import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer as Container } from "@react-navigation/native";

import DrawerNavigation from "./DrawerNavigation";

const NavigationContainer = () => {
    return (
        <Container>
            <DrawerNavigation />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NavigationContainer;
