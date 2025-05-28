import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Splashscreen } from '../assets/pages'
import Home from '../assets/pages/Home'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
