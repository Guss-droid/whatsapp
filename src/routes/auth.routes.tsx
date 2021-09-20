import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Chat } from '../screen/Chat';
import { Status } from '../screen/Status';
import { Call } from '../screen/Call';
import { TouchableOpacity, View } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons'
import { theme } from '../global/theme';
import { Camera } from '../screen/Camera';

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

function MaterialTopBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.headerDark },
        tabBarActiveTintColor: theme.colors.activateBarDark,
        tabBarInactiveTintColor: theme.colors.titlleHeaderDark,
        tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: theme.colors.activateBarDark, height: 3 },
      }}
    >
      <Tab.Screen name="camera" options={{
        tabBarLabel: () => (
          <View>
            <Icon name="camera" size={16} color={theme.colors.titlleHeaderDark} />
          </View>
        )
      }} component={Camera} />
      <Tab.Screen name="Conversas" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Chamadas" component={Call} />
    </Tab.Navigator>
  )
}

export function AuthRoutes() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            title: 'WhatsApp',
            headerTintColor: theme.colors.titlleHeaderDark,
            headerStyle: {
              elevation: 0,
              backgroundColor: theme.colors.headerDark,
            },
            headerRight: () => {
              return (
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <TouchableOpacity
                    onPress={() => (console.log('Search'))}
                    style={{ marginHorizontal: 5 }}
                  >
                    <Icon
                      name="search"
                      size={22}
                      color={theme.colors.titlleHeaderDark} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => console.log('A')}
                    style={{ marginHorizontal: 5 }}
                  >
                    <Icon
                      name="more-vertical"
                      size={22}
                      color={theme.colors.titlleHeaderDark} />
                  </TouchableOpacity>
                </View>
              )
            }
          })}
          name="Home"
          component={MaterialTopBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}