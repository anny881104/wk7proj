
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image,StyleSheet,Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MyBookScreen from './src/screens/MyBookScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AboutusScreen from './src/screens/AboutusScreen';
import bookData from "./src/json/book.json";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//Homeheader
const HomeStack = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            title: bookData.Title1,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}
//MyBookheader
const MyBookStack  = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="MyBookScreen" 
          component={MyBookScreen} 
          options={{
            title: bookData.Title2,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}
//Favoriteheader
const FavoriteStack  = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="FavoriteScreen" 
          component={FavoriteScreen} 
          options={{
            title: bookData.Title3,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}
//Settingsheader
const SettingsStack  = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen} 
          options={{
            title: bookData.Title4,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}
//Aboutusheader
const AboutusStack  = ({navigation}) => {
  return (
      <Stack.Navigator >
        <Stack.Screen 
          name="AboutusScreen" 
          component={AboutusScreen} 
          options={{
            title: bookData.Title5,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            }, 
            headerStyle: {
              backgroundColor:'#00b49f',
              height:85,
            },
            
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
              <Ionicons 
                name={'ios-menu'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),  
            headerRight: () => (
              <View style={{marginRight: 20}}>
              <Ionicons 
                name={'ios-search'} 
                size={30} 
                color={'#fff'}
                onPress={() => navigation.openDrawer()}
              /> 
              </View>            
            ),             
          }}
        />         
      </Stack.Navigator>
  );
}

//user
const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView style={{marginTop: -48}}{...rest}>

     <View style={styles.UserBox}>
      <Image
          source={require('./assets/img_user_photo.png')}
          style = {{height:80,width:80,marginTop:70,marginLeft:20}}
        />
        <View style={styles.Userstyle}>
          <Text style={styles.Usertext}>GamexHCl</Text>
          <Text style={styles.Usertext}>gdlab2017@gmail.com</Text>
        </View>

     </View>
      
    <DrawerItemList {...rest} />


    </DrawerContentScrollView>
  );
}


const App = () => {
  <index />
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref = {ref}>
      <Drawer.Navigator 
    drawerStyle={{ backgroundColor: '#ebebeb',width: 320,}}
    drawerContentOptions={{
      activeBackgroundColor: '#00b49f',
      activeTintColor:'#fff',
      itemStyle: { marginLeft: 0, marginRight: 0,height:54,justifyContent: 'center' },
      labelStyle: { fontSize: 20 },
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen 
      name="Home" 
      component={HomeStack} 
      options={
        {
          drawerLabel: 'Home', //標籤命名
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_bottomnav_home.png')}
              style={{width:24, height: 24, tintColor: tintColor }}
            />
          ),            
        }
      }
      />
    <Drawer.Screen 
      name="MyBook" 
      component={MyBookStack} 
      options={
        {
          drawerLabel: 'My Book',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_bottomnav_mybook.png')}
              style={{width:24, height: 24, tintColor: tintColor }}
            />
          ),            
        }
      }
    />    
    <Drawer.Screen 
      name="Favorites" 
      component={FavoriteStack} 
      options={
        {
          drawerLabel: 'Favorites',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_bottomnav_favorites.png')}
              style={{width:24, height: 24, tintColor: tintColor }}
            />
          ),            
        }
      }
    />
    <Drawer.Screen 
      name="Settings" 
      component={SettingsStack} 
      options={
        {
          drawerLabel: 'Settings',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_drawer_setting.png')}
              style={{width:24, height: 24, tintColor: tintColor }}
            />
          ),            
        }
      }
    />        
    <Drawer.Screen 
      name="Aboutus" 
      component={AboutusStack} 
      options={
        {
          drawerLabel: 'About us',
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon_drawer_aboutus.png')}
              style={{width:24, height: 24, tintColor: tintColor }}
            />
          ),            
        }
      }
    />                
  </Drawer.Navigator>
  </NavigationContainer>
  );
}
    


const styles = StyleSheet.create({
  UserBox:{
    backgroundColor:"#00b49f",
    height:200,
  },
  Userstyle:{
    flexDirection:"column",
    marginLeft:20,
    marginTop:5
  },
  Usertext:{
    color:"white",
    fontSize:14,
    marginRight:120
  }
});


export default App;