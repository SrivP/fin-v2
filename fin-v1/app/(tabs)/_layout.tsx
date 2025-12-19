import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, Pressable, StyleSheet } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            height: 100,
            bottom: 20,
            flexDirection: 'row',
            gap: 0
          },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarButton: (props) => (
            <CustomTabButton {...props} iconName="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarButton: (props) => (
            <CustomTabButton {...props} iconName="cog" />
          ),
        }}
      />
      <Tabs.Screen
        name = "analytics"
        options={{
          title: 'analytics',
          tabBarButton: ({props}) => (
            <HomeIcon />
          )
        }}
        />
      <Tabs.Screen
        name="add"
        options={{
          title: 'add'
        }}
        />
    </Tabs>
  );
}

// The Custom Button Component
const CustomTabButton = ({ children, onPress, accessibilityState, iconName }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[
          styles.circle,
          { backgroundColor: '#007AFF'}
        ]}
      >
        <FontAwesome 
          name={iconName} 
          size={24} 
          color={'white'} 
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

