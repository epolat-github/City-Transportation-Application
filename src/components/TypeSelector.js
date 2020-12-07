import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native-paper";
import { height, width, PRIMARY_COLOR } from "../utils/theme";

const typeList = ["Bus", "Subway"];

const TypeSelector = ({ selectedIndex, onPress }) => {
    return (
        <View style={styles.typeSelector}>
            {typeList.map((type, index) => (
                <TouchableWithoutFeedback
                    key={index}
                    onPress={() => onPress(index)}
                >
                    <View
                        style={[
                            styles.typeSelectorButton,
                            {
                                backgroundColor:
                                    selectedIndex === index
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
                                        selectedIndex === index
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
    );
};

const styles = StyleSheet.create({
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
});

export default TypeSelector;
