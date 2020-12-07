import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from "react-native-paper";

const CustomizableMenu = () => {
  return (
    <View style={styles.container}>
        <Text>Customizable Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomizableMenu;