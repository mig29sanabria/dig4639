import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


export default StackNavigator({
  Home:  Weather_project,
  Settings: Settings,
}, { }
);
