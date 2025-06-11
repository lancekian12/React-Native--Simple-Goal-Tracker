import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(e) {
    console.log(enteredGoalText);
  }
  return (
    // <View style={styles.container}>
    //   <View>
    //     <Text style={styles.dummyText}>My name is</Text>
    //   </View>
    //   <Text style={styles.dummyText}>Lance Kian Flores</Text>
    //   <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
    //   <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    //   <Button title="Tap me" />
    // </View>
    // <View
    //   style={{
    //     padding: 50,
    //     flexDirection: "row",
    //     width: "80%",
    //     height: 300,
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "red",

    //       flex: 1,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>1</Text>
    //   </View>

    //   <View
    //     style={{
    //       backgroundColor: "blue",
    //       flex: 2,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "green",

    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  // dummyText: {
  //   margin: 16,
  //   padding: 16,
  //   borderWidth: 2,
  //   borderColor: "blue",
  // },
  // bigBlue: {
  //   color: "blue",
  // },
  // red: {
  //   color: "red",
  // },
});
