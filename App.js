import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Calendar from "./Screens/Calendar";
import Fees from "./Screens/Fees";
import Notification from "./Screens/Notification";
import Help from "./Screens/Help";
import Quiz from "./Screens/Quiz";
import Attendance from "./Screens/Attendance";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Calendar" component={Calendar} />
        <Drawer.Screen name="Attendance" component={Attendance} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Fees" component={Fees} />
        <Drawer.Screen name=" Quiz" component={Quiz} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
