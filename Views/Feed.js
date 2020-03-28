import React, {
    Component,
} from 'react';

import ListEntry from "../Components/ListEntry"

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';

  const mapStateToProps = state => ({
    images: state.images,
    fetching: state.fetching,
  })
  
 

export default class Feed extends Component {

    componentDidMount() {
        let API_KEY = "o-as_obkHaDs7bpweoT92AT5inAWbpaAgw0aF4iSdw4";
     //   this.URL     = "https://api.unsplash.com/search/photos?query=Pugs-inu&client_id=" + this.API_KEY; 
        this.URL     = "https://api.unsplash.com/search/photos/random?count=10&client_id=" + this.API_KEY; 
      }
         render() {
           console.log(this.props.navigation);
           this.props.route.params.images.forEach(image => {
           });
            let CustomListObjects = this.props.route.params.images.map( (image, key) => {
              return (
                <ListEntry key         = {"ListObject#" + key} 
                           author      = {image.user.name}
                           url_small   = {image.urls.small}
                           url_full    = {image.urls.full} 
                           description = {image.alt_description}
                           navigator   = {this.props.navigation}
                  />
              )
            });
          return (
            <View style={styles.body}>
            <ScrollView contentContionerStyle={styles.bodyChildren}>
              {CustomListObjects}
            </ScrollView>
            </View>
          )
        }
}


const styles = StyleSheet.create({
	LoadIcon: {
        flex: 1,
      },
      bodyChildren: {
        flex:1, 
      },
      body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
      }
});