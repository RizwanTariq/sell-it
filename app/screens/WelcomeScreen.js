import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContent}>
        <Image style={styles.logo} source={require("../assets/logo_1.png")} />
        <Text style={{ color: "#03071e", fontWeight: "bold" }}>
          Sell What You Don't Need
        </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  logoContent: {
    position: "absolute",
    top: "5%",
    left: "32%",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    height: 40,
    width: "100%",
    backgroundColor: "#FFD166",
  },
  registerButton: {
    height: 40,
    width: "100%",
    backgroundColor: "#ef476f",
  },
});
export default WelcomeScreen;
