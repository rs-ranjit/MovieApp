import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../tabs/HomeScreen";
import SearchScreen from "../tabs/SearchScreen";
import SavedScreen from "../tabs/SavedScreen";
import ProfileScreen from "../tabs/ProfileScreen";
import MovieDetail from "../tabs/MovieDetail";

const SearchStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SavedStack = createNativeStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </SearchStack.Navigator>
  );
}

export function SavedStackScreen() {
  return (
    <SavedStack.Navigator screenOptions={{ headerShown: false }}>
      <SavedStack.Screen name="Saved" component={SavedScreen} />
    </SavedStack.Navigator>
  );
}

export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
