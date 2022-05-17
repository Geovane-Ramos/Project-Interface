import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../Pages/LogIn';
import SignUp from '../Pages/SignUp';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
        initialRouteName='LogIn'
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen
            name='LogIn'
            component={LogIn}
            />

            <Stack.Screen
            name='SignUp'
            component={SignUp}
            />
        </Stack.Navigator>
    );
}