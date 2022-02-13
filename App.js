import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrnLogin from './ScrnLogin';
import ScrnPost from "./ScrnPost";
import ScrnSignup from "./ScrnSignup";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={ScrnLogin}
                    options={{
                        title: 'Endless spacepossibilities await!'
                    }}
                />
                <Stack.Screen
                    name="post"
                    component={ScrnPost}
                    options={{
                        title: 'Spacetacular spaceposts'
                    }}
                />
                <Stack.Screen
                    name="signup"
                    component={ScrnSignup}
                    options={{
                        title: 'Your spacejourney spacebegins!'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
