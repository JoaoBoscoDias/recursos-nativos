import Home from "./screens/Home";
import DeviceInfo from "./screens/DeviceInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./screens/BatteryInfo";
import Notify from "./screens/Notify";
import MyScreenOrientations from "./screens/MyScreenOrientation";
import ContactsInfo from "./screens/ContactsInfo";
import NotifyAgend from "./screens/NotifyAgend";
import Chat from "./screens/Chat";

const Stack = createNativeStackNavigator();

export default function RootNavigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfo}
          options={{ title: "Device Info" }}
        />
        <Stack.Screen
          name="BatteryInfo"
          component={BatteryInfo}
          options={{ title: "Battery Info" }}
        />
        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{ title: "Notify" }}
        />
        <Stack.Screen
          name="MyScreenOrientation"
          component={MyScreenOrientations}
          options={{ title: "MyScreenOrientation" }}
        />
        <Stack.Screen
          name="ContactsInfo"
          component={ContactsInfo}
          options={{ title: "ContactsInfo" }}
        />
        <Stack.Screen
          name="NotifyAgend"
          component={NotifyAgend}
          options={{ title: "NotifyAgend" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: "Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
