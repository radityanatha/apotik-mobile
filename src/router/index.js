import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Splashscreen, Antrean, Histori, StokObat, Login} from '../assets/pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ButtonTabs from '../assets/components/molecules/ButtonTabs'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <ButtonTabs {...props} />}
    >
      <Tab.Screen name="Antrean" component={Antrean} />
      <Tab.Screen name="Histori" component={Histori} />
      <Tab.Screen name="StokObat" component={StokObat} />
      <Tab Screen name="Login" component={Login} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Antrean" component={Antrean} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
