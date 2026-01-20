import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

 
import MainTabs from "./MainTabs";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import EntryDetailScreen from "./screens/EntryDetailScreen";
import PremiumScreen from "./screens/PremiumScreen";
import ArchiveEntriesScreen from "./screens/ArchiveEntriesScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
 
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={({ navigation }) => ({
            headerTitle: "Daily Diary",
            headerRight: () => (
              <>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={() => navigation.navigate("Search")}
                >
                  <Ionicons name="search-outline" size={24} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate("Settings")}
                >
                  <Ionicons name="settings-outline" size={24} />
                </TouchableOpacity>
              </>
            ),
          })}
        />

        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="EntryDetail" component={EntryDetailScreen} />
        <Stack.Screen name="Premium" component={PremiumScreen} />
   <Stack.Screen
  name="ArchiveEntries"
  component={ArchiveEntriesScreen}
  options={{ title: "Archived Entries" }}
/>
<Stack.Screen name="PrivacyPolicy"  component={PrivacyPolicyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
