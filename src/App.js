import { NavigationContainer } from '@react-navigation/native'
import { Splashscreen } from './assets/pages'
import 'react-native-gesture-handler'
import Router from './router'

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}
