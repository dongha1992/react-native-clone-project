import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FilterScreen, SearchScreen, HomeScreen} from '../screens';

const HomeStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="homeScreen" component={HomeScreen} />
      <HomeStack.Screen name="searchScreen" component={SearchScreen} />
      <HomeStack.Screen name="filterScreen" component={FilterScreen} />
    </HomeStack.Navigator>
  );
}
export default HomeStackNavigator;
