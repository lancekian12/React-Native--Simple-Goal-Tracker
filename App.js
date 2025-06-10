import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    //     <View style={styles.container}>
    //       <View>
    //         <Text style={styles.dummyText}>My name is</Text>
    //       </View>
    //       <Text style={styles.dummyText}>Lance Kian Flores</Text>
    //       <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
    // <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    //       <Button title="Tap me" />
    //     </View>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
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
