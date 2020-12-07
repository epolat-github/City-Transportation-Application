import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const SetReminder = () => {
    return (
        <View style={styles.container}>
            <Text>Set Reminder</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SetReminder;
