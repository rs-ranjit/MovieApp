import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./tabs/HomeScreen";
import SearchScreen from "./tabs/SearchScreen";
import SavedScreen from "./tabs/SavedScreen";
import ProfileScreen from "./tabs/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer className="justify-center items-center flex-1 bg-white">
      <TabNavigation />
    </NavigationContainer>
  );
}
