import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings'

export default StackNavigator({
    Home: { screen: HomeScreen, },
    Settings: {screen: Settings, },
}, { }
);
