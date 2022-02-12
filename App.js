import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import scrnlogin from './scrnlogin';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Endless spacepossibilities await!" component={scrnlogin}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}