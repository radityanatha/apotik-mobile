import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Splashscreen, Antrean, Histori, StokObat } from '../assets/pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Antrean" component={Antrean} />
      <Tab.Screen name="Histori" component={Histori} />
      <Tab.Screen name="StokObat" component={StokObat} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Antrean" component={Antrean} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
