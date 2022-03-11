import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScrnLogin from './ScrnLogin';
import ScrnPost from './ScrnPost';
import ScrnSettings from './ScrnSettings';
import ScrnSignup from './ScrnSignup';
import ScrnSearch from './ScrnSearch';
import {Heading, NativeBaseProvider} from 'native-base';
import ScrnUser from './ScrnUser';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="post"
            component={ScrnPost}
            options={{
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spacetacular spaceposts
              </Heading>
            }}
          />
          <Stack.Screen
            name="login"
            component={ScrnLogin}
            options={{
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spacepossibilities spaceawait!
              </Heading>
            }}
          />
          <Stack.Screen
            name="search"
            component={ScrnSearch}
            options={{
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spaceselocate astronauts
              </Heading>
            }}
          />
          <Stack.Screen
            name="settings"
            component={ScrnSettings}
            options={{
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spacesettings and spacelog out
              </Heading>
            }}
          />
          <Stack.Screen
            name="signup"
            component={ScrnSignup}
            options={{
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Your spacejourney spacebegins!
              </Heading>
            }}
          />
          <Stack.Screen
            name="user"
            component={ScrnUser}
            options={{
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spaceuser spaceinformation
              </Heading>
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
