import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import useCounter from "./useCounter";
function App() {
  const { count, increement } = useCounter(0);
  return (
    <View style={styles.app}>
      <Text>Hello! This is an example custom Hooks</Text>
      <View>
        <Text>{count}</Text>
      </View>
      <Button type="button" onPress={increement} title={"Increement"}>
        Increement
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
