import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import MovieDetails from './screens/MovieDetails'

const Stack = createStackNavigator()

export const TO_HOME = 'Home'
export const TO_DETAILS = 'MovieDetails'

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={TO_HOME}
        component={Home}
        options={{
          title: 'THE MOVIE DATABASE',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={TO_DETAILS}
        component={MovieDetails}
        options={{
          title: 'Detalhes',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
