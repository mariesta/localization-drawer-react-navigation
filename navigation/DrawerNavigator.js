import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import TabBarIcon from '../components/TabBarIcon';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Screen1Stack = createStackNavigator(
  {
    Home: {
      screen: Screen1,
      navigationOptions: ({ navigation, screenProps: { t } }) => ({
        title: t('screen', { order: 1 }),
        headerLeft:
        <Icon
          name='bars'
          size={18}
          type='font-awesome'
          containerStyle={{paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} />
      })
    }
  }
);

const Screen2Stack = createStackNavigator(
  {
    Home: {
      screen: Screen2,
      navigationOptions: ({ navigation, screenProps: { t } }) => ({
        title: t('screen', { order: 2 }),
        headerLeft:
        <Icon
          name='bars'
          size={18}
          type='font-awesome'
          containerStyle={{paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} />
      })
    }
  }
);

const Screen3Stack = createStackNavigator(
  {
    Home: {
      screen: Screen3,
      navigationOptions: ({ navigation, screenProps: { t } }) => ({
        title: t('screen', { order: 3 }),
        headerLeft:
        <Icon
          name='bars'
          size={18}
          type='font-awesome'
          containerStyle={{paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} />
      })
    },
  }
);

const drawerNavigator = createDrawerNavigator({
  Screen1: {
     screen: Screen1Stack,
     navigationOptions:  ({ screenProps: { t } }) => ({
       drawerLabel: t('screen', { order: 1}),
     })
  },
  Screen2: {
    screen: Screen2Stack,
    navigationOptions:  ({ screenProps: { t } }) => ({
      drawerLabel: t('screen', { order: 2 }),
    })
  },
  Screen3: {
    screen: Screen3Stack,
    navigationOptions:  ({ screenProps: { t } }) => ({
      drawerLabel: t('screen', { order:  3 }),
    })
  }
});

drawerNavigator.path = '';

export default drawerNavigator;
