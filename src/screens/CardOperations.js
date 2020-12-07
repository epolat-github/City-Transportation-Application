import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const CardOperations = () => {
    return (
        <View style={styles.container}>
            <Text>Card Operations</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CardOperations;
