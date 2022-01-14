import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, SnapshotViewIOS, StyleSheet } from 'react-native';

function Screen({children}) {
    return <SafeAreaView style={StyleSheet.screen}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})
export default Screen;