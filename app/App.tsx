import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
// import AppNavigator from './AppNavigator'; // Import AppNavigator
import Login from '../app/login';
import SymptomChecker from '../app/symptomchecker'; // Ensure this screen exists
import { createStackNavigator } from '@react-navigation/stack';
import DoctorList from '../app/doctorlist';
import Appointment from '../app/appointment';
import SignUp from './signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="SymptomChecker" component={SymptomChecker} />
        <Stack.Screen name="DoctorList" component={DoctorList} options={{ headerShown: false }} />
        <Stack.Screen name="Appointment" component={Appointment} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}