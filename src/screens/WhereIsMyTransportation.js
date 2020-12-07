import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const WhereIsMyTransportation = () => {
    return (
        <View style={styles.container}>
            <Text>Where is my transportation?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default WhereIsMyTransportation;
