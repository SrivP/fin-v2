import { Tabs } from "expo-router";
import { Alert, Modal, View, Pressable, StyleSheet, Text } from "react-native";
import HomeIcon from "../../components/svgs/homeIcon";
import ChartIcon from "../../components/svgs/chartIcon";
import AddIcon from "../../components/svgs/addIcon";
import TransactionIcon from "../../components/svgs/transactionIcon";
import CustomHeader from "@/components/customHeader";
import { useState } from "react";
import { normalize } from "@/utils/normalize";
import { router } from "expo-router";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                router.navigate("/(tabs)/addTransaction");
              }}
            >
              <Text style={styles.textStyle}>Add Transaction</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                router.navigate("/(tabs)/addAccount");
              }}
            >
              <Text style={styles.textStyle}>Add Account</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                router.navigate("/(tabs)/addCategory");
              }}
            >
              <Text style={styles.textStyle}>Add Category</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
              <CustomTabButton
                {...props}
                Icon={HomeIcon}
                onPress={props.onPress}
              />
            ),
            header: () => <CustomHeader title="Welcome Back, Sri!" />,
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: "transactions",
            tabBarButton: (props) => (
              <CustomTabButton
                {...props}
                Icon={TransactionIcon}
                onPress={props.onPress}
              />
            ),
            header: () => <CustomHeader title="Sorting through?" />,
          }}
        />
        <Tabs.Screen
          name="analytics"
          options={{
            title: "analytics",
            tabBarButton: (props) => (
              <CustomTabButton
                {...props}
                Icon={ChartIcon}
                onPress={props.onPress}
              />
            ),
            header: () => <CustomHeader title="Charting the unexplored?" />,
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            tabBarButton: (props) => (
              <CustomTabButton
                {...props}
                Icon={AddIcon}
                onPress={() => setModalVisible(true)}
              />
            ),
            header: () => <CustomHeader title="Welcome Back, Sri!" />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarItemStyle: { display: "none" },
            headerShown: true,
            header: () => <CustomHeader title="Welcome Back, Sri!" />,
          }}
        />
        <Tabs.Screen
          name="addTransaction"
          options={{
            tabBarItemStyle: { display: "none" },
            headerShown: true,
            header: () => <CustomHeader title="Welcome Back, Sri!" />,
          }}
        />
        <Tabs.Screen
          name="addAccount"
          options={{
            tabBarItemStyle: { display: "none" },
            headerShown: true,
            header: () => <CustomHeader title="Welcome Back, Sri!" />,
          }}
        />
        <Tabs.Screen
          name="addCategory"
          options={{
            tabBarItemStyle: { display: "none" },
            headerShown: true,
            header: () => <CustomHeader title="Welcome Back, Sri!" />,
          }}
        />
      </Tabs>
    </>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginVertical: normalize(10),
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
