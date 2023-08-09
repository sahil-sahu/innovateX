import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import FootScreen from './screens/Footprint';
import Control from './screens/Control';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { SvgUri, G, Path, Defs, ClipPath } from 'react-native-svg';
const carbon = require('./assets/nav/footprints.svg');
const stats = require('./assets/nav/candlestick-chart.svg');
const home = require('./assets/nav/home.svg');
const reg = require('./assets/nav/grid.svg');
const communtiy = require('./assets/nav/orbit.svg');

const Tab = createBottomTabNavigator();
const dpurple = "#322765";
const purple = "#9686DA"

const MySvg = (props) => (
  <Svg width={24} height={24}>
    <SvgUri src={props.src} />
  </Svg>
);

export default function App() {
  const [url ,setUrl] = useState("");
  const [start ,setStart] = useState(false);
  if(start){
    return(
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        style: { backgroundColor: '#E6E1FF', padding: 10, height: 75, borderRadius: 10, },
      }}>
          <Tab.Screen name="Carbon" component={FootScreen}
            options={
              {
                  tabBarIcon: ({ focused }) => <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="none"
                >
                  <Path
                    stroke={focused?dpurple:purple}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.167}
                    d="M4.334 17.333v-2.578c0-2.297-1.116-3.38-1.083-6.088.032-2.947 1.614-6.5 4.875-6.5 2.026 0 2.708 1.95 2.708 3.791 0 3.37-2.167 6.132-2.167 9.404v1.971a2.167 2.167 0 11-4.333 0zm17.333 4.334v-2.579c0-2.296 1.115-3.38 1.083-6.088-.032-2.947-1.614-6.5-4.875-6.5-2.026 0-2.708 1.95-2.708 3.792 0 3.369 2.166 6.131 2.166 9.403v1.972a2.166 2.166 0 104.334 0zm-4.334-3.25h4.334M4.333 14.083h4.334"
                  />
                </Svg> ,
                 tabBarLabel: '',
      }
            }
          />
          <Tab.Screen name="Stats" component={FootScreen}
            options={
              {
                tabBarIcon: ({ focused }) => <Svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M9.75 5.417V9.75M10.833 9.75H8.667c-.599 0-1.084.485-1.084 1.083v4.334c0 .598.485 1.083 1.084 1.083h2.166c.599 0 1.084-.485 1.084-1.083v-4.334c0-.598-.485-1.083-1.084-1.083zM9.75 16.25v2.167M18.417 3.25v2.167M19.5 5.417h-2.167c-.598 0-1.083.485-1.083 1.083V13c0 .598.485 1.083 1.083 1.083H19.5c.598 0 1.083-.485 1.083-1.083V6.5c0-.598-.485-1.083-1.083-1.083zM18.417 14.083v3.25"
                  stroke={focused?dpurple:purple}
                  strokeWidth={2.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.25 3.25v19.5h19.5"
                  stroke={focused?dpurple:purple}
                  strokeWidth={2.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg> ,
                tabBarLabel: '', // Remove text labels
      }
            }
          />
          <Tab.Screen name="Home" component={HomeScreen}
            options={
              {
                tabBarIcon: ({ focused }) => <Svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M3.25 9.75L13 2.167l9.75 7.583v11.917a2.167 2.167 0 01-2.167 2.166H5.417a2.167 2.167 0 01-2.167-2.166V9.75z"
                  stroke={focused?dpurple:purple}
                  strokeWidth={2.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M9.75 23.833V13h6.5v10.833"
                  stroke={focused?dpurple:purple}
                  strokeWidth={2.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>,
                tabBarLabel: '', // Remove text labels
      }
            }
          />
          <Tab.Screen name="Control" component={Control}
            options={
              {
                tabBarIcon: ({ focused }) => <Svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <G
                  clipPath="url(#clip0_1_665)"
                  stroke={focused?dpurple:purple}
                  strokeWidth={2.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="M9.75 3.25H4.333c-.598 0-1.083.485-1.083 1.083v7.584c0 .598.485 1.083 1.083 1.083H9.75c.598 0 1.083-.485 1.083-1.083V4.333c0-.598-.485-1.083-1.083-1.083zM21.667 3.25H16.25c-.598 0-1.083.485-1.083 1.083v3.25c0 .599.485 1.084 1.083 1.084h5.417c.598 0 1.083-.485 1.083-1.084v-3.25c0-.598-.485-1.083-1.083-1.083zM21.667 13H16.25c-.598 0-1.083.485-1.083 1.083v7.584c0 .598.485 1.083 1.083 1.083h5.417c.598 0 1.083-.485 1.083-1.083v-7.584c0-.598-.485-1.083-1.083-1.083zM9.75 17.333H4.333c-.598 0-1.083.485-1.083 1.084v3.25c0 .598.485 1.083 1.083 1.083H9.75c.598 0 1.083-.485 1.083-1.083v-3.25c0-.599-.485-1.084-1.083-1.084z" />
                </G>
                <Defs>
                  <ClipPath id="clip0_1_665">
                    <Path fill="#fff" d="M0 0H26V26H0z" />
                  </ClipPath>
                </Defs>
              </Svg>,
                tabBarLabel: '', // Remove text labels
      }
            }
          />
          <Tab.Screen name="Settings" component={FootScreen}
            options={
              {
                tabBarIcon: ({ focused }) => <Svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M13 16.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM20.583 7.583a2.167 2.167 0 100-4.333 2.167 2.167 0 000 4.333zM5.417 22.75a2.167 2.167 0 100-4.333 2.167 2.167 0 000 4.333zM11.265 23.725a10.833 10.833 0 0010.77-16.7M14.627 2.276a10.833 10.833 0 00-10.661 16.7"
                  stroke={focused?dpurple:purple}
                  strokeWidth={2.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>,
                tabBarLabel: '', // Remove text labels
      }
            }
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Enter the Backend Url Below!</Text>
      <TextInput
                value={url}
                onChangeText={(e) => setUrl(e)}
                placeholder="Backend Url"
            />
      <Button
                title="Lets Go"
                onPress={() => {setStart(true);}}
            />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    backgroundColor: '#000000',
  },
});