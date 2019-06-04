import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RepoListItem extends Component {
    //state = {  }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.containerStyle}>
                    <View style={styles.nameContainerStyle}>
                        <Icon name="book" size={20} color="#595757" />
                        <Text style={styles.titleTextStyle}>{this.props.repo.owner.login}/<Text style={{ fontWeight: '600'}}>{this.props.repo.name}</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.descTextStyle}>{this.props.repo.description}</Text>
                    </View>
                    <View style={styles.ratingContainerStyle}>
                        <Icon name="star" size={16} color="#464d56" />
                        <Text style={styles.starGazerTextStyle}>{this.props.repo.stargazers_count}</Text>
                        <Text style={{ color: '#4c535d', marginLeft: 20}}>{this.props.repo.language}</Text>
                    </View>
                </View>
                <View style={styles.separatorViewStyle}>
                </View>
            </View>
        );
    }
}

export default RepoListItem;

const styles = {
    containerStyle: {
        padding: 12,
        marginTop: 4,
        marginBottom: 4
    },
    nameContainerStyle: {
        flexDirection: 'row'
    },
    titleTextStyle:{
        marginLeft: 10,
        fontSize: 18,
        color: '#0a4dcd',
        flex: 1,
        flexWrap: 'wrap'
    },
    descTextStyle: {
        color: '#4c535d',
        marginTop: 8,
        marginLeft: 30,
        flex: 1,
        flexWrap: 'wrap'
    },
    ratingContainerStyle: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 10
    },
    starGazerTextStyle: {
        marginLeft: 8
    },
    separatorViewStyle: {
        backgroundColor: '#c2c8d1',
        height: 1,
        width: Dimensions.get('window').width
    }

}