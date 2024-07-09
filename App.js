import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screen/Login";
import SignUp from "./src/screen/SignUp";
import SelectGender from "./src/screen/SelectGender";
import SelectAge from "./src/screen/SelectAge";
import Home from "./src/screen/Home";
import SelectWeight from "./src/screen/SelectWeight";
import SelectHeight from "./src/screen/SelectHeight";
import SelectGoal from "./src/screen/SelectGoal";
import SelectYourActivityLevel from "./src/screen/SelectYourActivityLevel";
const Stack = createStackNavigator();

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectWeight" component={SelectWeight} />
        <Stack.Screen name="SelectHeight" component={SelectHeight} />
        <Stack.Screen name="SelectGoal" component={SelectGoal} />
        <Stack.Screen
          name="SelectYourActivityLevel"
          component={SelectYourActivityLevel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
