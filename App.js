import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScrnLogin from './ScrnLogin';
import ScrnPost from './ScrnPost';
import ScrnSettings from './ScrnSettings';
import ScrnSignup from './ScrnSignup';
import ScrnSearch from './ScrnSearch';
import {Button, Heading, NativeBaseProvider} from 'native-base';
import ScrnUser from './ScrnUser';
const Stack = createNativeStackNavigator();
export function BackButton(navigation) {
  // eslint-disable-next-line prettier/prettier
  return (
    <Button onPress={() => navigation.goBack()}>{'<'}</Button>
  );
}
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="post"
            component={ScrnPost}
            options={({navigation}) => ({
              headerLeft: () => BackButton(navigation),
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spacetacular spaceposts
              </Heading>
            })}
          />
          <Stack.Screen
            name="login"
            component={ScrnLogin}
            options={({navigation}) => ({
              headerLeft: () => BackButton(navigation),
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spacepossibilities spaceawait!
              </Heading>
            })}
          />
          <Stack.Screen
            name="search"
            component={ScrnSearch}
            options={({navigation}) => ({
              headerLeft: () => BackButton(navigation),
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spaceselocate astronauts
              </Heading>
            })}
          />
          <Stack.Screen
            name="settings"
            component={ScrnSettings}
            options={({navigation}) => ({
              headerLeft: () => BackButton(navigation),
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spacesettings and spacelog out
              </Heading>
            })}
          />
          <Stack.Screen
            name="signup"
            component={ScrnSignup}
            options={({navigation}) => ({
              headerLeft: () => BackButton(navigation),
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Your spacejourney spacebegins!
              </Heading>
            })}
          />
          <Stack.Screen
            name="user"
            component={ScrnUser}
            options={({navigation}) => ({
              headerLeft: () => BackButton(navigation),
              // eslint-disable-next-line prettier/prettier
              headerTitle: () => <Heading>
                Spaceuser spaceinformation
              </Heading>
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
