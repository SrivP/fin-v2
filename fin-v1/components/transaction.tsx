import { normalize } from "@/utils/normalize";

import { Image } from "expo-image";

import { Pressable, Text, View, StyleSheet } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Transaction() {
  return (
    <Pressable
      style={{
        width: normalize(340),
        height: normalize(80),
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: normalize(16),
        borderRadius: normalize(12),
        marginVertical: normalize(6),
      }}
    >
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      <View style={{ flex: 1, marginLeft: normalize(12) }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: normalize(4),
          }}
        >
          <Text
            style={{
              fontSize: normalize(15),
              fontWeight: "800",
              color: "#000",
            }}
          >
            Notion Sub....
          </Text>
          <Text
            style={{
              fontSize: normalize(15),
              fontWeight: "600",
              color: "#FF0000",
            }}
          >
            $ -499
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: normalize(13),
              color: "#999",
              fontWeight: "500",
            }}
          >
            Nov 12, 2025
          </Text>
          <Text
            style={{
              fontSize: normalize(13),
              color: "#999",
              fontWeight: "500",
            }}
          >
            Food
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  image: {
    width: normalize(48),
    height: normalize(48),
    backgroundColor: "#0553",
    borderRadius: 100,
  },
});
