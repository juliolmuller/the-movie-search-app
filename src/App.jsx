import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ToDo from './screens/ToDo';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ToDo" component={ToDo} options={{ title: 'Lista de Tarefas' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
