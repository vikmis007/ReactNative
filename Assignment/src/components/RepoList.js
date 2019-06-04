import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { ListItem, List } from 'react-native-elements';

import RepoListItem from './RepoListItem';

class RepoList extends Component {
    state = { 
        isLoading: true,
        dataSource:[],
    }

    componentDidMount() {
        this.fetchRepo();
    }

    renderFooter = () => {
        if (!this.state.isLoading) return null;
        return (
            <View style = {styles.indicatorContainer}>
                <ActivityIndicator
                animating
                color = '#bc2b78'
                size = "large"
                style = {styles.activityIndicator}
                />
            </View>
        );
    }

    fetchRepo = () => {
        const { dataSource } = this.state;
        const url = `https://api.github.com/users/supreetsingh247/repos`
        this.setState({
            isLoading: true
        })
        fetch(url)
            .then(response => response.json())
            .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: [...dataSource, ...responseJson]
            })
            })
            .catch(error => {
                console.log(error);
            }
        )
    }

    render () { 
        return (
            <FlatList
                style={{ paddingBottom: 60 }}
                data={this.state.dataSource}
                renderItem={({ item, index }) => (
                    <RepoListItem key={item.id} repo={item}/>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={this.renderFooter}
            />
        );
    }
}

export default RepoList;

const styles = {
  indicatorContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
  },
  activityIndicator: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 80
  }
}