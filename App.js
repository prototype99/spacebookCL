import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import scrnlogin from './scrnlogin';
import scrnpost from "./scrnpost";
import scrnsignup from "./scrnsignup";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={scrnlogin}
                    options={{
                        title: 'Endless spacepossibilities await!'
                    }}
                />
                <Stack.Screen
                    name="post"
                    component={scrnpost}
                    options={{
                        title: 'Spacetacular spaceposts'
                    }}
                />
                <Stack.Screen
                    name="signup"
                    component={scrnsignup}
                    options={{
                        title: 'Your spacejourney spacebegins!'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}