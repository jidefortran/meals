import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useNunito,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Text } from "react-native";
import { SafeArea } from "./src/utils/safe-area.component";

export default function App() {
  const [nunitoLoaded] = useNunito({
    Nunito_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!latoLoaded || !nunitoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const Settings = () => (
    <SafeArea>
      
      <Text> Settings</Text>
    </SafeArea>
  );
  const Map = () => (
    <SafeArea>
      
      <Text> Map</Text>
    </SafeArea>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen /> */}
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
              tabBarActiveTintColor: "#e91e63",
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{
                tabBarLabel: "Restaurant",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="food-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{
                tabBarLabel: "Map",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="map-outline"
                    color={color}
                    size={size}
                  />
                ),
                tabBarBadge: 3,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="cog-outline"
                    color={color}
                    size={size}
                  />
                ),
                tabBarBadge: 3,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>

        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
