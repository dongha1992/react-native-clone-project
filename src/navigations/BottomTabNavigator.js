import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  FeedScreen,
  AuthScreen,
  CreateScreen,
  MyPageScreen,
} from '../screens';
import {COLOR, FONT} from '../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = {
  style: {
    height: '9.5%',
  },
  labelStyle: {
    fontSize: 12,
    margin: 0,
    padding: 0,
  },
  activeTintColor: COLOR.grey700,
  inactiveTintColor: 'gray',
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '탐색') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === '개설') {
            iconName = focused ? 'create' : 'create-outline';
          } else if (route.name === '인증') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === '피드') {
            iconName = focused ? 'aperture' : 'aperture-outline';
          } else if (route.name === '마이페이지') {
            iconName = focused ? 'man' : 'man-outline';
          }
          return <Icon name={iconName} size={25} color={COLOR.grey600} />;
        },
      })}>
      <Tab.Screen name="탐색" component={HomeStackNavigator} />
      <Tab.Screen name="개설" component={CreateScreen} />
      <Tab.Screen name="인증" component={AuthScreen} />
      <Tab.Screen name="피드" component={FeedScreen} />
      <Tab.Screen name="마이페이지" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
