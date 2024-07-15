import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Login from "./src/screen/Login";
import SignUp from "./src/screen/SignUp";
import SelectGender from "./src/screen/SelectGender";
import SelectAge from "./src/screen/SelectAge";
import SelectWeight from "./src/screen/SelectWeight";
import SelectHeight from "./src/screen/SelectHeight";
import SelectGoal from "./src/screen/SelectGoal";
import SelectYourActivityLevel from "./src/screen/SelectYourActivityLevel";
import UploadPicture from "./src/screen/UploadPicture";
import Profile from "./src/screen/TabScreens/Profile";
import Setting from "./src/screen/TabScreens/Setting";
import Explore from "./src/screen/TabScreens/Explore";
import Challenges from "./src/screen/Challenges";
import StartNow from "./src/screen/StartNow";
import ActiveWorkout from "./src/screen/ActiveWorkout";
import Workout from "./src/screen/TabScreens/Workout";
import Home from "./src/screen/TabScreens/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#BDFE30",
        tabBarInactiveTintColor: "#B6B6B6",
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          justifyContent: "center",
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: "#3A3A3C",
          borderTopWidth: 1,
          borderTopColor: "transparent",
          position: "absolute",
          bottom: 20,
          elevation: 0,
          borderRadius: 40,
          height: 60,
          left: 20,
          right: 20,
          alignSelf: "center",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = Ionicons;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Workout") {
            iconName = "dumbbell";
            IconComponent = FontAwesome5;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SelectGender" component={SelectGender} />
        <Stack.Screen name="SelectAge" component={SelectAge} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="SelectWeight" component={SelectWeight} />
        <Stack.Screen name="SelectHeight" component={SelectHeight} />
        <Stack.Screen name="SelectGoal" component={SelectGoal} />
        <Stack.Screen name="UploadPicture" component={UploadPicture} />
        <Stack.Screen name="Challenges" component={Challenges} />
        <Stack.Screen name="StartNow" component={StartNow} />
        <Stack.Screen name="ActiveWorkout" component={ActiveWorkout} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen
          name="SelectYourActivityLevel"
          component={SelectYourActivityLevel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
