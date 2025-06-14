import React from "react";
import { StyleSheet } from "react-native";

const GoalInput = () => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
};

export default GoalInput;
