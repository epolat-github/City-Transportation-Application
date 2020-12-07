import React, { useState, useRef, useEffect } from "react";
import { Text, View, Modal, StyleSheet, Platform } from "react-native";
import { Button } from "react-native-paper";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MapView from "react-native-maps";

const ShowATMOverlay = ({ isVisible, cancelAction, submitAction, mode }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MapView
                        style={{ width: "100%", height: "100%" }}
                        initialRegion={{
                            latitude: 39.921323,
                            longitude: 32.861323,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <View style={styles.actionButtonsContainer}>
                        <Button
                            style={styles.actionButtons}
                            onPress={cancelAction}
                            mode="contained"
                            color="red"
                            icon="close"
                        >
                            Close
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
        justifyContent: "center",
    },
    actionButtonsContainer: {
        flexDirection: "row",

        height: hp("10%"),
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        bottom: 20,

        paddingHorizontal: wp("8%"),
    },
    actionButtons: {
        height: 40,
        width: "45%",
        justifyContent: "center",
        alignSelf: "center",
    },
});

export default ShowATMOverlay;
