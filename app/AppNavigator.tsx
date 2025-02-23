import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../app/login'; // Import Login screen
import Signup from './signup'; // Import Signup screen
import SymptomChecker from '../app/symptomchecker'; // Import SymptomChecker screen (or any other screen)
import DoctorList from './doctorlist';
import Appointment from './appointment';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Signup" component={Signup} />
    //   <Stack.Screen name="SymptomChecker" component={SymptomChecker} />
    //   {/* Add other screens as needed */}
    // </Stack.Navigator>
    <Stack.Navigator initialRouteName="Login">
      {/* Register Login Screen */}
      <Stack.Screen name="Login" component={Login} />

      {/* Register Signup Screen */}
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="DoctorList" component={DoctorList} options={{ headerShown: false }} />
      <Stack.Screen name="Appointment" component={Appointment} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
