import { Tabs } from "expo-router";
import { View, Pressable, StyleSheet } from "react-native";
import HomeIcon from "../../components/svgs/homeIcon";
import ChartIcon from "../../components/svgs/chartIcon";
import AddIcon from "../../components/svgs/addIcon";
import TransactionIcon from "../../components/svgs/transactionIcon";
import CustomHeader from "@/components/customHeader";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          height: 100,
          bottom: 10,
          marginLeft: "20%",
          width: "60%",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarButton: (props) => (
            <CustomTabButton {...props} Icon={HomeIcon} />
          ),
          header: () => <CustomHeader title="Welcome Back, Sri!" />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "transactions",
          tabBarButton: (props) => (
            <CustomTabButton {...props} Icon={TransactionIcon} />
          ),
          header: () => <CustomHeader title="Sorting through?" />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "analytics",
          tabBarButton: (props) => (
            <CustomTabButton {...props} Icon={ChartIcon} />
          ),
          header: () => <CustomHeader title="Charting the unexplored?" />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "add",
          tabBarButton: (props) => (
            <CustomTabButton {...props} Icon={AddIcon} />
          ),
          header: () => <CustomHeader title="Welcome Back, Sri!" />,
        }}
      />
    </Tabs>
  );
}

// The Custom Button Component

const CustomTabButton = ({ onPress, Icon }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[styles.circle, { backgroundColor: "#D9D9D9" }]}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "82%",
            height: "82%",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon color={"white"} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
