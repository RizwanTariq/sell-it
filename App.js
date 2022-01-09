import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
});
