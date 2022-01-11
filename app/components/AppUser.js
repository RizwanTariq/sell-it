import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AppUser({ image, title, subTitle }) {
  console.log(image, title, subTitle);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 14,
    marginTop: 2,
    color: colors.lightGray,
  },
});

export default AppUser;
