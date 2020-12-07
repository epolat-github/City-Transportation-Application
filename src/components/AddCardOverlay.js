import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AddCardOverlay = ({ isVisible, cancelAction, submitAction, mode }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.heading}>Add New Card</Text>
                    <View style={styles.formContainer}>
                        <TextInput label="Card Number" mode="outlined" />
                        <TextInput label="Card Name" mode="outlined" />
                        <TextInput label="Card Alias" mode="outlined" />
                    </View>

                    <View style={styles.actionButtonsContainer}>
                        <Button
                            style={styles.actionButtons}
                            onPress={cancelAction}
                            mode="contained"
                            color="red"
                            icon="cancel"
                        >
                            Cancel
                        </Button>
                        <Button
                            style={styles.actionButtons}
                            onPress={submitAction}
                            mode="contained"
                            color="green"
                            icon="check"
                        >
                            Add Card
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: "rgba(0,0,0,0.7)",
        flex: 1,
        // zIndex: 99,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        width: wp("100%"),
    },
    modalView: {
        width: wp("90%"),
        height: hp("60%"),
        // margin: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: wp("5%"),
        // padding: wp("2%"),
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        // justifyContent: "center",
    },
    heading: {
        // backgroundColor: "red",
        height: "10%",
        alignSelf: "center",
        fontSize: 20,
        paddingTop: 20,
        fontWeight: "bold",
    },
    formContainer: {
        width: "80%",
        height: "60%",

        marginTop: 20,

        alignSelf: "center",
        justifyContent: "space-around",

        // backgroundColor: "red",
    },
    actionButtonsContainer: {
        flexDirection: "row",
        // backgroundColor: "red",

        height: hp("10%"),
        width: "100%",

        justifyContent: "space-between",
        alignItems: "center",

        position: "absolute",
        bottom: 20,

        paddingHorizontal: wp("8%"),
    },
    actionButtons: {
        height: 40,
        width: "45%",
        justifyContent: "center",
    },
});

export default AddCardOverlay;
