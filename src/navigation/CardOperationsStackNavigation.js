import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CardOperations from "../screens/CardOperations";

const Stack = createStackNavigator();

const CardOperationsStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CardOperations" component={CardOperations} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CardOperationsStackNavigation;
