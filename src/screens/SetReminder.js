import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, Button } from "react-native-paper";
import { height, width, PRIMARY_COLOR } from "../utils/theme";
import SetReminderOverlay from "../components/SetReminderOverlay";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TypeSelector from "../components/TypeSelector";
import { reminderList } from "../utils/data";
import { SafeAreaView } from "react-native-safe-area-context";

const ReminderItem = ({ reminder, onRemove }) => {
    return (
        <View style={styles.reminderItem}>
            <Icon
                onPress={onRemove}
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
    const [data, setData] = useState(reminderList);

    const toggleOverlay = () => {
        setIsAddOverlayVisible((prev) => !prev);
    };

    const removeReminder = (index) => {
        const removedData = [...data];
        removedData.splice(index, 1);
        setData(removedData);
    };

    const addReminder = (
        reminderName,
        reminderLine,
        reminderStation,
        reminderTime
    ) => {
        toggleOverlay();
        setData((prev) => [
            ...prev,
            {
                reminderName,
                reminderLine,
                reminderStation,
                reminderTime,
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <SetReminderOverlay
                isVisible={isAddOverlayVisible}
                submitAction={addReminder}
                cancelAction={toggleOverlay}
            />
            <TypeSelector
                selectedIndex={selectedType}
                onPress={(index) => setSelectedType(index)}
            />
            <View style={styles.remindersListContainer}>
                {data.map((reminder, index) => (
                    <ReminderItem
                        key={`${reminder.reminderName}-${index}`}
                        onRemove={() => removeReminder(index)}
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

    remindersListContainer: {
        height: height * 0.6,

        justifyContent: "space-evenly",
    },
    reminderItem: {
        backgroundColor: "#fff",
        height: 110,
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
        paddingBottom: 10,

        flexDirection: "column",
        justifyContent: "space-between",
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
