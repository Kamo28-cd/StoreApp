import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/assets/views/screens/HomeScreen';
import DetailsScreen from './src/assets/views/screens/DetailsScreen';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


import COLORS from './src/assets/consts/colors';


const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

			<Stack.Navigator screenOptions={{headerShown:false}}>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="DetailsScreen" component={DetailsScreen} />	
			</Stack.Navigator>
		</NavigationContainer>
	);
}




