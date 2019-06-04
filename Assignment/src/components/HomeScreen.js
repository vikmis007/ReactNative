import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, Image } from 'react-native';
import { ListItem, List, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import RepoList from './RepoList';
import HeaderSection from './HeaderSection';

export default class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <Image style={{ width: 30, height: 30 }} source={require('./../../images/github.png')}/>
        ),
        headerLeft: (
            <Icon
                style={{ marginLeft: 12 }}
                name="bars"
                size={30}
                color="#4c535d"
            />
        ),
        headerRight: (
            <Icon
                style={{ marginRight: 12 }}
                name="bell"
                size={30}
                color="#4c535d"
            />
        ),
        headerStyle: {
            backgroundColor: '#1b1f22',
        },
    };

    state = { 
    }
    render () { 
        return (
            <View>
                <HeaderSection />
                <RepoList />
            </View>
        );
    }
}