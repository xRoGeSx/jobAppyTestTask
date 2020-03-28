import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
  } from 'react-native';


  export default class ExpandedImage extends Component {
    static propTypes = {
        url_full: PropTypes.string,
    }
      render() {
        if (this.props.route.params.url_full.length) 
          return (
            <View style={styles.body}>
                <Image source = {{ uri: this.props.route.params.url_full }}
                   style={styles.image}
                 /> 
             </View>
          )
        else
          return (
            <View style={styles.body}>
            <Text style={styles.text}> We're sorry, but your image is unavailable </Text>
            </View>
          )
      }
  }

  const styles = StyleSheet.create({
	image: {
    flex: 1,
    margin: 2,
    alignSelf: 'stretch',
  },
    body: {
        flex: 1,
        backgroundColor: '#3A3838'
    },
    text: {
        color: 'white',
        alignSelf: 'center',
    },
});