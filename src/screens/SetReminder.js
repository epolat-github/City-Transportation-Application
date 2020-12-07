import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, Button } from "react-native-paper";
import { height, width, PRIMARY_COLOR } from "../utils/theme";
import SetReminderOverlay from "../components/SetReminderOverlay";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const reminderList = [
    {
        reminderName: "Reminder-1",
        reminderLine: 427,
        reminderStation: 13317,
        reminderTime: "09:30",
    },
    {
        reminderName: "Reminder-1",
        reminderLine: 427,
        reminderStation: 13317,
        reminderTime: "09:30",
    },
    {
        reminderName: "Reminder-1",
        reminderLine: 427,
        reminderStation: 13317,
        reminderTime: "09:30",
    },
    {
        reminderName: "Reminder-1",
        reminderLine: 427,
        reminderStation: 13317,
        reminderTime: "09:30",
    },
];

const typeList = ["Bus", "Subway"];

const ReminderItem = ({ reminder }) => {
    return (
        <View style={styles.reminderItem}>
            <Icon
                style={{ position: "absolute", right: 10, top: 10 }}
                name="delete"
                size={25}
                color="red"
            />
            <Text style={styles.reminderName}>{reminder.reminderName}</Text>
            <Text
                style={styles.reminderLine}
            >{`Line Number: ${reminder.reminderLine}`}</Text>
            <Text style={styles.reminderStation}>
                {`Station Number: ${reminder.reminderStation}`}
            </Text>
            <Text
                style={styles.reminderTime}
            >{`Time: ${reminder.reminderTime}`}</Text>
        </View>
    );
};

const SetReminder = () => {
    const [isAddOverlayVisible, setIsAddOverlayVisible] = useState(false);
    const [selectedType, setSelectedType] = useState(0);

    const toggleOverlay = () => {
        setIsAddOverlayVisible((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <SetReminderOverlay
                isVisible={isAddOverlayVisible}
                submitAction={toggleOverlay}
                cancelAction={toggleOverlay}
            />
            <View style={styles.typeSelector}>
                {typeList.map((type, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => setSelectedType(index)}
                    >
                        <View
                            style={[
                                styles.typeSelectorButton,
                                {
                                    backgroundColor:
                                        selectedType === index
                                            ? PRIMARY_COLOR
                                            : "#fff",
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.typeSelectorLabel,
                                    {
                                        color:
                                            selectedType === index
                                                ? "#fff"
                                                : PRIMARY_COLOR,
                                    },
                                ]}
                            >
                                {type}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
            <View style={styles.remindersListContainer}>
                {reminderList.map((reminder, index) => (
                    <ReminderItem
                        key={`${reminder.reminderName}-${index}`}
                        reminder={reminder}
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    style={styles.actionButton}
                    uppercase={false}
                    mode="contained"
                    color="red"
                    icon="delete"
                >
                    Remove Reminder
                </Button>
                <Button
                    style={styles.actionButton}
                    uppercase={false}
                    mode="contained"
                    color="green"
                    icon="alarm-plus"
                    onPress={toggleOverlay}
                >
                    Add Reminder
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
    },
    typeSelector: {
        alignSelf: "center",
        flexDirection: "row",
        width: width * 0.6,
        height: 60,
        backgroundColor: "red",
        borderRadius: 30,
        overflow: "hidden",

        borderColor: PRIMARY_COLOR,
        borderWidth: StyleSheet.hairlineWidth,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    typeSelectorButton: {
        width: "50%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center",

        // backgroundColor: "blue",
    },
    typeSelectorLabel: {
        fontSize: 18,
    },
    remindersListContainer: {
        height: height * 0.6,

        justifyContent: "space-evenly",
    },
    reminderItem: {
        backgroundColor: "#fff",
        height: 90,
        width: "80%",

        alignSelf: "center",
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,

        paddingLeft: 10,
        paddingTop: 5,
    },
    reminderName: {
        fontSize: 17,
        fontWeight: "bold",
        alignSelf: "center",
    },
    reminderLine: {},
    reminderStation: {},
    reminderTime: {},
    buttonContainer: {
        alignSelf: "center",
        flexDirection: "row",
        width: width * 0.95,
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    actionButton: {
        height: 50,
        width: 170,

        justifyContent: "center",
        alignItems: "center",
    },
});

export default SetReminder;
