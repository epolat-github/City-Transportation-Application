import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Platform,
    UIManager,
    LayoutAnimation,
} from "react-native";
import { Text, Button } from "react-native-paper";
import { cardData } from "../utils/data";
import { height, width } from "../utils/theme";
import CardOperationsCard from "../components/CardOperationsCard";
import AddCardOverlay from "../components/AddCardOverlay";
import ShowATMOverlay from "../components/ShowATMOverlay";
import { SafeAreaView } from "react-native-safe-area-context";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const CardOperations = () => {
    const [isShowATMVisible, setIsShowATMVisible] = useState(false);
    const [isAddCardVisible, setIsAddCardVisible] = useState(false);
    const [data, setData] = useState(cardData);

    const addCard = (cardName, cardAlias, cardNumber, cardBalance = 0) => {
        setIsAddCardVisible(false);
        setData((prev) => [
            ...prev,
            {
                cardName,
                cardAlias,
                cardNumber,
                cardBalance,
            },
        ]);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    const removeCard = (index) => {
        const removedData = [...data];
        removedData.splice(index, 1);
        setData(removedData);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
        <View style={styles.container}>
            <ShowATMOverlay
                isVisible={isShowATMVisible}
                cancelAction={() => setIsShowATMVisible(false)}
                submitAction={() => setIsShowATMVisible(false)}
            />

            <AddCardOverlay
                isVisible={isAddCardVisible}
                cancelAction={() => setIsAddCardVisible(false)}
                submitAction={addCard}
            />

            <View style={styles.buttonsContainer}>
                <Button
                    mode="contained"
                    onPress={() => setIsShowATMVisible(true)}
                    icon="cash-usd"
                >
                    Show ATMs
                </Button>
                <Button
                    mode="contained"
                    onPress={() => setIsAddCardVisible(true)}
                    color="green"
                    icon="card-bulleted-outline"
                >
                    Add Card
                </Button>
            </View>

            {/* <View style={styles.cardsContainer}> */}
            {/* <Text style={styles.cardContainerHeading}>Card List</Text> */}
            <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={{
                    alignItems: "center",
                    // paddingBottom: 50,
                }}
                showsVerticalScrollIndicator={false}
            >
                {data.map((card, index) => (
                    <CardOperationsCard
                        key={`card${index}`}
                        cardName={card.cardName}
                        cardAlias={card.cardAlias}
                        cardNumber={card.cardNumber}
                        cardBalance={card.cardBalance}
                        onRemove={() => removeCard(index)}
                    />
                ))}
            </ScrollView>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "space-between",
    },
    buttonsContainer: {
        height: height * 0.1,
        paddingHorizontal: 30,
        // backgroundColor: "red",

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    cardsContainer: {
        height: height * 0.9,
        width: "100%",
        alignItems: "center",
    },
    cardContainerHeading: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default CardOperations;
