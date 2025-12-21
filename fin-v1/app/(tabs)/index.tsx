import { Text, View, ScrollView, StyleSheet } from "react-native";
import { normalize } from "@/utils/normalize";
import { BlurView } from "expo-blur";
import CCChip from "@/components/svgs/ccChip";
import MCCard from "@/components/svgs/mcCard";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F9F9F9",
      }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        paddingBottom: normalize(120),
      }}
      decelerationRate={"normal"}
    >
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.cardBase,
            {
              backgroundColor: "#000",
              transform: [{ translateY: normalize(40) }, { scale: 0.9 }],
              opacity: 0.8,
            },
          ]}
        >
          <CCChip />
        </View>
        <View
          style={[
            styles.cardBase,

            {
              backgroundColor: "#ED6A46",

              transform: [{ translateY: normalize(22) }, { scale: 0.95 }],
            },
          ]}
        >
          <CCChip />
        </View>

        <BlurView
          style={[
            styles.cardBase,
            styles.glassBorder,
            {
              justifyContent: "space-between",
            },
          ]}
          intensity={100}
          tint="systemThinMaterial"
        >
          <View
            style={{
              flexDirection: "row",
              width: normalize(320),
              height: normalize(30),
              marginTop: normalize(20),
              marginLeft: normalize(20),
              justifyContent: "space-between",
            }}
          >
            <CCChip />
            <MCCard />
          </View>
          <View
            style={{
              marginBottom: normalize(20),
              marginLeft: normalize(20),
            }}
          >
            <Text
              style={{
                fontSize: 24,
              }}
            >
              John Doe
            </Text>
          </View>
        </BlurView>
      </View>
      <View>
        <Text
          style={{
            width: normalize(350),
            marginBottom: normalize(10),
          }}
        >
          Spending Information
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: normalize(350),
        }}
      >
        <View
          style={{
            width: normalize(170),
            height: normalize(160),
            backgroundColor: "#EDEDED",
            borderRadius: 16,
            marginBottom: normalize(10),
          }}
        ></View>
        <View
          style={{
            width: normalize(170),
            height: normalize(160),
            gap: 10,
            marginLeft: normalize(10),
          }}
        >
          <View
            style={{
              width: normalize(170),
              height: normalize(75),
              backgroundColor: "#C6DCCE",
              borderRadius: 16,
            }}
          ></View>
          <View
            style={{
              width: normalize(170),
              height: normalize(75),
              backgroundColor: "#F1C8C8",
              borderRadius: 16,
            }}
          ></View>
        </View>
      </View>

      <View
        style={{
          width: normalize(350),
          height: normalize(320),
          backgroundColor: "#EDEDED",
          borderRadius: 16,
        }}
      ></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: normalize(350),
    height: normalize(280),
    borderRadius: 16,
    alignSelf: "center",
  },

  cardBase: {
    width: normalize(350),

    height: normalize(230),

    borderRadius: 16,

    position: "absolute",

    top: 0,
  },

  glassBorder: {
    overflow: "hidden",

    borderWidth: 1,

    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
});
