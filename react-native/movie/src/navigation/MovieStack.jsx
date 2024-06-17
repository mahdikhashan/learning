import * as React from "react";
import { Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MovieListScreen } from "../screens/MovieListScreen";
import { MovieDetailsScreen } from "../screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MovieListScreen}
        options={{
          title: "Overview",
          headerRight: () => <Button title="Update count" />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetailsScreen}
        options={{
          title: "Details",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
