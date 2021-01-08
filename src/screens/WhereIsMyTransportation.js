import React, { useState } from "react";
import {
    View,
    StyleSheet,
    LayoutAnimation,
    ScrollView,
    Platform,
    UIManager,
} from "react-native";
import { Text, List } from "react-native-paper";
import TypeSelector from "../components/TypeSelector";
import { busLine, stations, busInformation } from "../utils/data";
import { width, height, PRIMARY_COLOR } from "../utils/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ShowATMOverlay from "../components/ShowATMOverlay";
import { SafeAreaView } from "react-native-safe-area-context";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const BusIndicator = ({ data, openMap }) => {
    return (
        <View style={styles.busIndicator}>
            <Text>{`Line Number: \t\t${data.line}`}</Text>
            <Text>{`Estimated Time: \t\t${data.estimatedTime} mins.`}</Text>
            <Text>{`Passenger Count: \t${data.passengerCount}`}</Text>
            <Icon
                style={{ position: "absolute", right: 10, top: 30 }}
                onPress={openMap}
                size={30}
                name="map"
                color={PRIMARY_COLOR}
            />
        </View>
    );
};

const WhereIsMyTransportation = () => {
    const [selectedType, setSelectedType] = useState(0);
    const [isLineSelectExpanded, setIsLineSelectExpanded] = useState(false);
    const [isStationSelectExpanded, setIsStationSelectExpanded] = useState(
        false
    );
    const [showOverlay, setShowOverlay] = useState(false);

    const _listToggleHandler = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ShowATMOverlay
                    isVisible={showOverlay}
                    cancelAction={() => setShowOverlay(false)}
                    marker={{
                        lat: 39.954885,
                        long: 32.763928,
                    }}
                />
                <View
                    style={{ height: height * 0.1, justifyContent: "center" }}
                >
                    <TypeSelector
                        selectedIndex={selectedType}
                        onPress={(index) => setSelectedType(index)}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <List.Accordion
                        title="Line Selection"
                        left={(props) => <List.Icon {...props} icon="bus" />}
                        onPress={_listToggleHandler}
                    >
                        {busLine.map((lineName, index) => (
                            <List.Item
                                key={`${lineName}-${index}`}
                                title={lineName}
                            />
                        ))}
                    </List.Accordion>
                    <List.Accordion
                        title="Station Selection"
                        left={(props) => <List.Icon {...props} icon="stop" />}
                        onPress={_listToggleHandler}
                    >
                        {stations.map((stationName, index) => (
                            <List.Item
                                key={`${stationName}-${index}`}
                                title={stationName}
                            />
                        ))}
                    </List.Accordion>
                    <ScrollView>
                        {busInformation.map((bus, index) => (
                            <BusIndicator
                                key={`${bus.line}-${index}`}
                                data={bus}
                                openMap={() => setShowOverlay(true)}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
    },
    contentContainer: {
        height: height * 0.8,
    },
    busIndicator: {
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignSelf: "center",
        height: 90,

        padding: 10,

        marginVertical: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,

        justifyContent: "space-evenly",
    },
});

export default WhereIsMyTransportation;
