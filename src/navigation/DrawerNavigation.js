import React from "react";
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screen Imports
import CardOperations from "../screens/CardOperations";
import CustomizableMenu from "../screens/CustomizableMenu";
import SetReminder from "../screens/SetReminder";
import WhereIsMyTransportation from "../screens/WhereIsMyTransportation";

// Stack Navigator Imports
// import CardOperationsStackNavigation from "./CardOperationsStackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="CustomizableMenu"
            screenOptions={{ headerShown: true }}
            sceneContainerStyle={{ backgroundColor: "#fff" }}
        >
            <Drawer.Screen
                name="WhereIsMyTransportation"
                component={WhereIsMyTransportation}
                options={{ title: "Where is My Transportation?" }}
            />
            <Drawer.Screen
                name="CardOperations"
                component={CardOperations}
                options={{ title: "Card Operations" }}
            />
            <Drawer.Screen
                name="CustomizableMenu"
                component={CustomizableMenu}
                options={{ title: "Customizable Menu" }}
            />
            <Drawer.Screen
                name="SetReminder"
                component={SetReminder}
                options={{ title: "Set Reminder" }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default DrawerNavigation;
