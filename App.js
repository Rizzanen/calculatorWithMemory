import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState("");
  const [calculation, setCalculation] = useState([]);

  const handleInputChange = (value, inputType) => {
    if (inputType === "first") {
      setFirst(parseFloat(value));
    } else if (inputType === "second") {
      setSecond(parseFloat(value));
    }
  };
  const addition = () => {
    setResult(first + second);
    const newCalculation = `${first} + ${second} = ${first + second}`;
    setCalculation((prevCalculation) => [...prevCalculation, newCalculation]);
  };
  const substract = () => {
    setResult(first - second);
    const newCalculation = `${first} - ${second} = ${first - second}`;
    setCalculation((prevCalculation) => [...prevCalculation, newCalculation]);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Result:{result}</Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: "50%",
          height: "5%",
        }}
        keyboardType="numeric"
        value={`${first}`}
        onChangeText={(value) => handleInputChange(value, "first")}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: "50%",
          height: "5%",
        }}
        keyboardType="numeric"
        value={`${second}`}
        onChangeText={(value) => handleInputChange(value, "second")}
      />

      <View
        style={{ display: "flex", flexDirection: "row", marginLeft: "12%" }}
      >
        <Pressable
          onPress={() => addition()}
          style={{
            marginTop: 10,
            width: 30,
            backgroundColor: "blue",
            padding: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "white" }}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => substract()}
          style={{
            marginTop: 10,
            width: 30,
            backgroundColor: "blue",
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>-</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          style={{ marginLeft: "12%", marginTop: "5%" }}
          data={calculation}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginLeft: "25%",
  },
});
