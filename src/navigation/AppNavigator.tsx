import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReportListScreen from '../screens/ReportListScreen';
import CreateReportScreen from '../screens/CreateReportScreen';
import EditReportScreen from '../screens/EditReportScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Reports"
        component={ReportListScreen}
      />

      <Tab.Screen
        name="Create"
        component={CreateReportScreen}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
      />

    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditReport"
          component={EditReportScreen}
          options={{ title: 'Edit Report' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}