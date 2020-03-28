import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';


export default class ListEntry extends Component {
    static propTypes = {
        url_small: PropTypes.string,
        url_full: PropTypes.string,
        author: PropTypes.string,
        description: PropTypes.string,
        color: PropTypes.string,
        navigator: PropTypes.any
    }

    render() {
        const onPress = () => {
            console.log(this.props.navigator)
            this.props.navigator.push('ExpandedImage', {url_full: this.props.url_full} );
        }
        const capitalizeFirstLetter = (string) => {
            if(string)
            return string.charAt(0).toUpperCase() + string.slice(1);
            else
            return string
        }
        return(
        <View>
            <TouchableOpacity onPress={onPress}>
            <Image source = {{ uri: this.props.url_small }}
                   style  = {styles.image}
            /> 
            </TouchableOpacity>
            <View style={[styles.TextBox]}>
                <Text style={[{alignSelf: 'flex-start'}, styles.text]}>{'\t'} {capitalizeFirstLetter(this.props.author)} </Text> 
                <Text style={[{alignSelf: 'flex-end'},styles.text]}>   {'\t'} {capitalizeFirstLetter(this.props.description)} </Text>
            </View>
        </View>
        )
    }
}



const styles = StyleSheet.create({
	image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
    TextBox: {
        width: 300,
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: "#3A3838",
        borderRadius: 10,
    },
    mainView: {
        flex:1, 
        width: 305,
        flexDirection: 'column',  
        alignItems: 'stretch',
        backgroundColor: '#3A3838',
    },
    text: {
        color: 'white',
        marginLeft: 5,
        marginBottom: 5,
    }

});