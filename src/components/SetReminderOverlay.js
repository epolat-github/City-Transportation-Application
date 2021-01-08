import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { menuNames } from "../utils/data";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomizableMenuOverlay = ({
    isVisible,
    cancelAction,
    submitAction,
    mode,
}) => {
    const [reminderName, setReminderName] = useState("");
    const [reminderLine, setReminderLine] = useState("");
    const [reminderStation, setReminderStation] = useState("");
    const [reminderTime, setReminderTime] = useState("");
    const [error, setError] = useState(false);

    const formValidation = () =>
        reminderName !== "" &&
        reminderLine !== "" &&
        reminderStation !== "" &&
        reminderTime !== "";

    const clear = () => {
        setReminderName("");
        setReminderLine("");
        setReminderStation("");
        setReminderTime("");
        setError(false);
    };

    const submit = () => {
        if (!formValidation()) {
            setError(true);
            return;
        }
        submitAction(reminderName, reminderLine, reminderStation, reminderTime);
        clear();
    };

    const cancel = () => {
        clear();
        cancelAction();
    };

    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.heading}>Add New Reminder</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            error={error}
                            value={reminderName}
                            onChangeText={(text) => setReminderName(text)}
                            mode="outlined"
                            label="Reminder Name"
                        />
                        <TextInput
                            error={error}
                            value={reminderLine}
                            onChangeText={(text) => setReminderLine(text)}
                            mode="outlined"
                            label="Line Number"
                        />
                        <TextInput
                            error={error}
                            value={reminderStation}
                            onChangeText={(text) => setReminderStation(text)}
                            mode="outlined"
                            label="Station Number"
                        />
                        <TextInput
                            error={error}
                            value={reminderTime}
                            onChangeText={(text) => setReminderTime(text)}
                            mode="outlined"
                            label="Desired Time"
                        />
                    </View>

                    <Button
                        onPress={submit}
                        mode="contained"
                        color="green"
                        icon="check"
                        style={{ alignSelf: "center", marginTop: 10 }}
                    >
                        Save
                    </Button>

                    {/* <View style={styles.actionButtonsContainer}> */}
                    <Icon
                        size={30}
                        style={styles.actionButtons}
                        onPress={cancel}
                        color="red"
                        name="close"
                    />
                    {/* </View> */}
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
        height: hp("65%"),
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
        height: "70%",

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

        paddingHorizontal: wp("8%"),
    },
    actionButtons: {
        height: 40,
        width: "10%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 15,
        right: 15,
    },
});

export default CustomizableMenuOverlay;
