import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppUser from "./app/components/AppUser";
import ItemDetailsScreen from "./app/screens/ItemDetailsScreen";
import ListingItemsScreen from "./app/screens/ListingItemsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MessagesScreen />
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
