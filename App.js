import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import scrnlogin from './scrnlogin';
import scrnpost from "./scrnpost";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Endless spacepossibilities await!" component={scrnlogin}/>
                <Stack.Screen name="Spacetacular spaceposts" component={scrnpost}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}