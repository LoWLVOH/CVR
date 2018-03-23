import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import EvenementScreen from '../screens/EvenementScreen';
import CalendrierScreen from '../screens/CalendrierScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Evenement: {
      screen: EvenementScreen,
    },
    Calendrier: {
      screen: CalendrierScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {

          case 'Evenement':
            iconName =
              Platform.OS === 'ios'
                ? `ios-time${focused ? '' : '-outline'}`: 'md-time';
            break;

          case 'Calendrier':
            iconName = Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar';
            break;

          case 'Profile':
            iconName =
              Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-contact';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }
);
