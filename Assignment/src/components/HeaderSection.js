import React, { Component } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class HeaderSection extends Component {

    constructor() {
        super();
        this.state = {
            selectedIndex: 1
        };
    }

    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };


    render() {
        return (
            <ScrollView style={styles.segmentedStyle} horizontal={true} showsHorizontalScrollIndicator={false}>
                <SegmentedControlTab
                    tabsContainerStyle={styles.tabsContainerStyle}
                    tabStyle={styles.tabStyle}
                    firstTabStyle={styles.firstTabStyle}
                    lastTabStyle={styles.lastTabStyle}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    values={["Overview", "Repository", "Stars", "Follower"]}
                    selectedIndex={this.state.selectedIndex}
                />
            </ScrollView>
        );
    }
}

const styles = {
    segmentedStyle: {
    },
    tabsContainerStyle: {
        height: 45,
        borderRadius: 0,
        borderWidth: 0
    },
    tabStyle: {
        backgroundColor: '#1b1f22',
        width: (Dimensions.get('window').width) / 2.8,
        borderRadius: 0,
        color: 'white',
        borderColor: '#1e2127',
        borderWidth: 0,
    },
    firstTabStyle:{
        borderRadius: 0
    },
    lastTabStyle:{
        cornerRadius: 0
    },
    activeTabStyle: {
        backgroundColor: '#1b1f22'
    },
    tabTextStyle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18
    }
}