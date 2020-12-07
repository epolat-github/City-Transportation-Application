import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import { cardData } from "../utils/data";
import { height, width } from "../utils/theme";
import CardOperationsCard from "../components/CardOperationsCard";
import AddCardOverlay from "../components/AddCardOverlay";
import ShowATMOverlay from "../components/ShowATMOverlay";

const CardOperations = () => {
    const [isShowATMVisible, setIsShowATMVisible] = useState(false);
    const [isAddCardVisible, setIsAddCardVisible] = useState(false);

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
                submitAction={() => setIsAddCardVisible(false)}
            />

            <View style={styles.buttonsContainer}>
                <Button
                    mode="contained"
                    onPress={() => setIsShowATMVisible(true)}
                >
                    Show ATMs
                </Button>
                <Button
                    mode="contained"
                    onPress={() => setIsAddCardVisible(true)}
                >
                    Add Card
                </Button>
            </View>

            <View style={styles.cardsContainer}>
                {/* <Text style={styles.cardContainerHeading}>Card List</Text> */}
                <ScrollView
                    style={{ width: "100%", height: "100%" }}
                    contentContainerStyle={{
                        alignItems: "center",
                        paddingBottom: 50,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {cardData.map((card, index) => (
                        <CardOperationsCard
                            key={`card${index}`}
                            cardName={card.cardName}
                            cardAlias={card.cardAlias}
                            cardNumber={card.cardNumber}
                            cardBalance={card.cardBalance}
                        />
                    ))}
                </ScrollView>
            </View>
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
