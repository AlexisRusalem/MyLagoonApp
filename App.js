import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import Sensors from './screens/Sensors';
import StarboardSensor from './screens/StarboardSensor';
import Location from './screens/Location';
import Windy from './screens/Windy';
import PortSensor from './screens/PortScreen';
import SailingScreen from './screens/SailingScreen';
import MotorScreen from './screens/MotorScreen';
import AnchorScreen from './screens/AnchorScreen';
//import BLTScreen from './screens/BLTScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sensors"
      component={Sensors}
      options={{
        title: 'Controls',
        headerStyle: {
          backgroundColor: '#161818',
        },
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="StarboardSensor"
      component={StarboardSensor}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PortSensor"
      component={PortSensor}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Location"
      component={Location}
    />
    <Stack.Screen
      name="Windy"
      component={Windy}
    />
    <Stack.Screen
      name="Sailing"
      component={SailingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Motor"
      component={MotorScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Anchor"
      component={AnchorScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}