import { ScrollView, Text, View, TextInput } from "react-native";
import Transaction from "@/components/transaction";
import SearchIcon from "@/components/svgs/searchIcon";
import { normalize } from "@/utils/normalize";

export default function Transactions() {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 20,
      }}
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <View
        style={{
          width: "90%",
          minHeight: normalize(55),
          borderRadius: 100,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingHorizontal: normalize(18),
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        }}
      >
        <SearchIcon color="#000" />

        <TextInput
          placeholder="Search transactions..."
          placeholderTextColor="#999"
          style={{
            flex: 1,
            marginLeft: normalize(10),
            color: "#000",
            fontSize: 16,
            height: "100%",
            paddingVertical: 0,
          }}
        />
      </View>

      <View style={{ width: "100%", marginTop: 20 }}>
        <Transaction />
      </View>
    </ScrollView>
  );
}
