import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MyBookScreen from './src/screens/MyBookScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

const index = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === 'Home') {
              iconPath = focused
              ? require('./assets/icon_bottomnav_home_seleced.png'):
              require('./assets/icon_bottomnav_home.png');
            } else if (route.name === 'Favorite') {
              iconPath = focused
              ? require('./assets/icon_bottomnav_mybook_selected.png'):
              require('./assets/icon_bottomnav_mybook.png');
            } else if (route.name == 'MyBook') {
              iconPath = focused
              ? require('./assets/icon_bottomnav_favorites_seleced.png'):
              require('./assets/icon_bottomnav_favorites.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 30, height: 30}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#01B49F',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
            marginTop: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyBook" component={MyBookScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default index;