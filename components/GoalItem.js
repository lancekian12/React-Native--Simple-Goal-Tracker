import React from "react";
import { StyleSheet } from "react-native";

const GoalItem = () => {
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{itemData.item.text}</Text>
  </View>;
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
