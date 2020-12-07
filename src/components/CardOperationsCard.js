import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CARD_HEIGHT = 175;

const CardOperationsCard = ({
    cardName,
    cardAlias,
    cardBalance,
    cardNumber,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardName}>{cardName}</Text>
            <Icon
                style={styles.deleteButton}
                name="delete"
                size={30}
                color="tomato"
                onPress={() => Alert.alert(null, `${cardName} is deleted!`)}
            />
            <View style={styles.contentContainer}>
                <View style={styles.informationContainer}>
                    <Text style={styles.informationLabel}>Card ID:</Text>
                    <Text style={styles.informationText}>{cardNumber}</Text>
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.informationLabel}>Card Alias:</Text>
                    <Text style={styles.informationText}>{cardAlias}</Text>
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.informationLabel}>Card Balance:</Text>
                    <Text
                        style={styles.informationText}
                    >{`${cardBalance} TL`}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: CARD_HEIGHT,
        width: "90%",
        justifyContent: "space-around",
        alignItems: "center",

        marginVertical: 20,

        backgroundColor: "#fff",

        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,

        elevation: 5,
    },
    cardName: {
        fontSize: 24,
        fontWeight: "bold",
    },
    deleteButton: {
        position: "absolute",
        right: 15,
        top: 10,
    },
    contentContainer: {
        height: "60%",
        // backgroundColor: "red",

        justifyContent: "space-around",
    },
    informationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "red",
        width: "60%",
        // paddingVertical: 5
    },
    informationLabel: {
        fontSize: 16,
        fontWeight: "bold",
    },
    informationText: {
        fontSize: 16,
        fontWeight: "100",
    },
});

export default CardOperationsCard;
