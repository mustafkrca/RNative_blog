import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import { AntDesign } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulaması" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Create");
                  }}
                >
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Edit");
                  }}
                >
                  <FontAwesome name="pencil" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
