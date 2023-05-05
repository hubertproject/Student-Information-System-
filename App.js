import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  EvilIcons,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcon,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Calendar from "./Screens/Calendar";
import Fees from "./Screens/Fees";
import Notification from "./Screens/Notification";
import Help from "./Screens/Help";
import Quiz from "./Screens/Quiz";
import Attendance from "./Screens/Attendance";
import TimeTable from "./Screens/TimeTable";
import User from "./assets/user.png";

 
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator

      drawerContent ={
      (props) => {
        return(
        <SafeAreaView>
        <View style={{ 
          height: 200,
          width:"100%",
          justifyContent:"center",
          alignItems:"center",
           borderBottomColor:"#f4f4f4",
           borderBottomWidth:1,
          //  backgroundColor: "blue"

           }}
          >
          <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65

          }}
          />
          <Text
          style={{
            fontsize: 30,
            marginVertical: 6,
            fontWeight: "bold",
            color: "#111"
          }}
          >Hubert Selormey</Text>
          <Text
          style={{
            fontsize: 20,
            color: "#111"
          }}
          >Student</Text>
 
        </View>
        <DrawerItemList {...props} />
        </SafeAreaView>
      )
      }
      }
      
        screenOptions={{
          drawerStyle:{
            backgroundColor: "#fff",
            width:250
          },
          headerStyle:{
            backgroundColor:"#f4511e",
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight:"bold"
            },
            drawerActiveTintColor:"blue",
            drawerLabelStyle:{
              color:"#111"
            }
          }}
        > 
        <Drawer.Screen
        name="Home"
        options={{
          drawerLabel:"Home",
          title: "Home",
          drawerIcon:() =>(
            <SimpleLineIcons name="home" size={30} color="#808080"/>
            
          )
        }}
        component={Home}

        />
         <Drawer.Screen
        name="Calendar"
        options={{
          drawerLabel:"Calendar",
          title: "Calendar",
          drawerIcon:() =>(
            <EvilIcons name="calendar" size={35} color="#808080"/>
            
          )
        }}
        component={Calendar}

        />
         <Drawer.Screen
        name="Fees"
        options={{
          drawerLabel:"Fees",
          title: "Fees",
          drawerIcon:() =>(
            <MaterialIcons name="money" size={35} color="#808080"/>
            
          )
        }}
        component={Fees}

        />
         <Drawer.Screen
        name="TimeTable"
        options={{
          drawerLabel:"TimeTable",
          title: "TimeTable",
          drawerIcon:() =>(
            <MaterialIcons name="today" size={35} color="#808080"/>
            
          )
        }}
        component={TimeTable}

        />
         <Drawer.Screen
        name="Quiz"
        options={{
          drawerLabel:"Quiz",
          title: "Quiz",
          drawerIcon:() =>(
            <SimpleLineIcons name="book-open"size={32} color="#808080"/>
            
          )
        }}
        component={Quiz}

        />
         <Drawer.Screen
        name="Attendance"
        options={{
          drawerLabel:"Attendance",
          title: "Attendance",
          drawerIcon:() =>(
            <SimpleLineIcons name="people" size={35} color="#808080"/>
            
          )
        }}
        component={Attendance}

        />
         <Drawer.Screen
        name="Notification"
        options={{
          drawerLabel:"Notification",
          title: "Notification",
          drawerIcon:() =>(
            <EvilIcons name="bell" size={35} color="#808080"/>
            
          )
        }}
        component={Notification}

        />
         <Drawer.Screen
        name="Help"
        options={{
          drawerLabel:"Help",
          title: "Help",
          drawerIcon:() =>(
            <MaterialIcons name="help" size={35} color="#808080"/>
            
          )
        }}
        component={Help}

        />
        
        
        </Drawer.Navigator> 
    </NavigationContainer>
  );
}
