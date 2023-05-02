import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const mike = 'https://ble-2mhrhl577-nt994.vercel.app/'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ width: '100%', height:'100%' }}>
      <WebView
        source={{ uri: mike }}
        onload={console.log("Loaded!")}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

