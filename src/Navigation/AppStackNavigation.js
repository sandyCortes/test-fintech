import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './../screens/Home'
import { Details } from './../screens/Details'

const Stack = createNativeStackNavigator();

export function AppStackNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ object: {} }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}