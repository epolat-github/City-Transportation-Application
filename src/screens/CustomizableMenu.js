import React, { useState } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Alert,
    Platform,
    UIManager,
    LayoutAnimation,
    TouchableHighlight,
} from "react-native";
import { Text, Button } from "react-native-paper";
import { width, height } from "../utils/theme";
import { menuNames } from "../utils/data";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomizableMenuOverlay from "../components/CustomizableMenuOverlay";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const ITEM_HEIGHT = 100;

const Item = ({ name, isEditable, onDeletePress, onPress }) => {
    return (
        <TouchableHighlight
            style={styles.item}
            underlayColor="#ddd"
            activeOpacity={0.1}
            onPress={onPress}
        >
            <>
                <Text style={styles.itemLabel}>{name}</Text>
                {isEditable && (
                    <Icon
                        style={[
                            styles.deleteButton,
                            Platform.OS === "android" && {
                                backgroundColor: "#fff",
                            },
                        ]}
                        size={30}
                        name="delete"
                        onPress={onDeletePress}
                        color="tomato"
                    />
                )}
            </>
        </TouchableHighlight>
    );
};

const CustomizableMenu = () => {
    const navigation = useNavigation();

    const [isEditable, setIsEditable] = useState(false);
    const [isNewItemSelectorOpen, setIsNewItemSelectorOpen] = useState(false);

    const navigationExtractor = (itemName) => {
        switch (itemName) {
            case "Transportation":
                return "WhereIsMyTransportation";
            case "Reminder":
                return "SetReminder";
            case "Card":
                return "CardOperations";
            case "Settings":
            default:
                return null;
        }
    };

    const _onDeletePress = (name) => {
        Alert.alert(null, `${name} is removed from your menu.`);
    };

    const _onEditPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsEditable((prev) => !prev);
    };

    const _toggleItemSelector = () => {
        setIsNewItemSelectorOpen((prev) => !prev);
    };

    const _onItemPress = (itemName) => {
        const destination = navigationExtractor(itemName);
        destination && navigation.navigate(destination);
    };

    return (
        <View style={styles.container}>
            <CustomizableMenuOverlay
                cancelAction={_toggleItemSelector}
                isVisible={isNewItemSelectorOpen}
                submitAction={_toggleItemSelector}
            />
            <View style={styles.buttonContainer}>
                {isEditable ? (
                    <>
                        <Button
                            contentStyle={{
                                height: 45,
                                width: 140,
                            }}
                            style={styles.editItemButton}
                            uppercase={false}
                            mode="contained"
                            onPress={_toggleItemSelector}
                        >
                            Add New Item
                        </Button>
                        <Button
                            contentStyle={{
                                height: 45,
                                width: 140,
                            }}
                            style={styles.editItemButton}
                            uppercase={false}
                            mode="contained"
                            color="green"
                            onPress={_onEditPress}
                        >
                            Apply
                        </Button>
                    </>
                ) : (
                    <Button
                        contentStyle={{
                            height: 45,
                            width: 140,
                        }}
                        style={styles.editItemButton}
                        uppercase={false}
                        mode="contained"
                        onPress={_onEditPress}
                    >
                        Edit Items
                    </Button>
                )}
            </View>

            <FlatList
                contentContainerStyle={{
                    padding: 10,
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                data={menuNames}
                renderItem={({ item: name }) => (
                    <Item
                        name={name}
                        isEditable={isEditable}
                        onDeletePress={() => _onDeletePress(name)}
                        onPress={() => _onItemPress(name)}
                    />
                )}
                numColumns={2}
                columnWrapperStyle={{
                    // backgroundColor: "blue",
                    width,
                    justifyContent: "space-evenly",
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        height: height * 0.15,

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    editItemButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        backgroundColor: "#fff",
        height: ITEM_HEIGHT,
        width: ITEM_HEIGHT * 1.5,
        marginBottom: 10,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,

        justifyContent: "center",
        alignItems: "center",
    },
    itemLabel: {
        fontSize: 16,
    },
    deleteButton: {
        position: "absolute",
        right: -15,
        top: -15,

        borderRadius: 100,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default CustomizableMenu;
