import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Splashscreen } from '../assets/pages'
import Antrean from '../assets/pages/Antrean'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Antrean" component={AntreanScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Antrean" component={Antrean} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
