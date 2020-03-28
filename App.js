/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react';
import {connect} from 'react-redux';
import {fetchImages} from "./actions/imageActions";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import Feed from  "./Views/Feed"

import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import ExpandedImage from './Views/ExpandedImage';

const Stack = createStackNavigator();



class App extends React.Component {
    constructor(props) {
    super(props)
    this.API_KEY = "o-as_obkHaDs7bpweoT92AT5inAWbpaAgw0aF4iSdw4";
  //  this.URL     = "https://api.unsplash.com/search/photos?query=Pugs-inu&client_id=" + this.API_KEY; 
  this.URL     = "https://api.unsplash.com/photos/random?count=30&client_id=" + this.API_KEY; 
    this.props.dispatch(fetchImages(this.URL))
  }
  render() {
    if(this.props.fetching) {
      return (
        <View style={styles.LoadIcon}>
          <ActivityIndicator size="large" />
        </View>
      )
    } else {
  return (
            <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Feed" 
                          component={Feed} 
                          initialParams={{images: this.props.images}} 
                          options={{
                            headerStyle: styles.header,
                            headerTintColor: 'white',
                          }}
            />
            <Stack.Screen name="ExpandedImage" 
                          component={ExpandedImage} 
                          options={{
                            headerStyle: styles.header,
                            headerTintColor: 'white',
                          }}              
            />
          </Stack.Navigator>  
        </NavigationContainer>
  ) }
  }
}

const styles = StyleSheet.create({
	LoadIcon: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
  },
  bodyChildren: {
    flex:1, 
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: '#3A3838',
  },

});

const mapStateToProps = state => ({
  images: state.image.images,
  fetching: state.image.fetching,
})

export default connect(mapStateToProps)(App);

