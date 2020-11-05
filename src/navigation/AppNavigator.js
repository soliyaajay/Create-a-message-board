import * as React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Image, TouchableOpacity, DeviceEventEmitter } from 'react-native'

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import DetailPost from '../screens/DetailPost';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name='Splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
            <Stack.Screen name='Home' component={Home} options={{ title: 'Home', headerShown: true, }} />
            <Stack.Screen name='DetailPost' component={DetailPost} options={{ title: 'DetailPost', headerBackTitle: 'Back' }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;