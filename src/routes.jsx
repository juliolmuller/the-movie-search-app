import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import ShowDetails from './screens/ShowDetails'
import PersonDetails from './screens/PersonDetails'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'THE MOVIE DATABASE',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ShowDetails"
        component={ShowDetails}
        options={{
          title: 'Details',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PersonDetails"
        component={PersonDetails}
        options={{
          title: 'Details',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
