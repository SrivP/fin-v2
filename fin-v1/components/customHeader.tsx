import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Recommended for Expo
import { useRouter } from "expo-router";
import SettingsIcon from "./svgs/settingsIcon";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const CustomHeader = ({ title }) => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.leftContainer}>
          <Pressable>
            <Image
              style={styles.image}
              source="https://picsum.photos/seed/696/3000/2000"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F9F9F9",
  },
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F9F9F9",
  },
  leftContainer: {
    width: 40,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  image: {
    width: 38,
    height: 38,
    backgroundColor: "#0553",
    borderRadius: 100,
  },
});

export default CustomHeader;
