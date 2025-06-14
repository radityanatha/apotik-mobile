// Pastikan baris ini ada di PALING ATAS
import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Splashscreen, Login } from './assets/pages'

const Stack = createStackNavigator()

export default function App() {
  return (
    // GestureHandlerRootView HARUS MEMBUNGKUS SEMUANYA
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

// Jangan lupa tambahkan View dan Text untuk contoh HomeScreen
import { View, Text } from 'react-native'
