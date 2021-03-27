import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {ChallengeDetailScreen} from '../screens';

const MainStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function StackNavigator() {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen
        name="bottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen
        name="challengeDetailScreen"
        component={ChallengeDetailScreen}
      />
    </MainStack.Navigator>
  );
}
export default StackNavigator;
