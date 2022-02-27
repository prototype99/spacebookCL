import React from 'react';
import {TEST_IP} from 'react-native-dotenv';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrnLogin from './ScrnLogin';
import ScrnPost from './ScrnPost';
import ScrnSettings from './ScrnSettings';
import ScrnSignup from './ScrnSignup';
import ScrnSearch from './ScrnSearch';
const Stack = createNativeStackNavigator();
global.svurl = 'http://' + TEST_IP + ':3333/api/1.0.0/';
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="post"
                    component={ScrnPost}
                    options={{
                        title: 'Spacetacular spaceposts'
                    }}
                />
                <Stack.Screen
                    name="login"
                    component={ScrnLogin}
                    options={{
                        title: 'Endless spacepossibilities spaceawait!'
                    }}
                />
                <Stack.Screen
                    name="search"
                    component={ScrnSearch}
                    options={{
                        title: 'Spaceselocate astronauts'
                    }}
                />
                <Stack.Screen
                    name="settings"
                    component={ScrnSettings}
                    options={{
                        title: 'Spacesettings and spacelog out'
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