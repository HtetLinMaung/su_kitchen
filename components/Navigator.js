import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "../routes";

const Stack = createStackNavigator();

const Navigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="GetstartedScreen">
      {routes.map((route) => (
        <Stack.Screen
          key={route.name}
          options={route.options}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigator;
