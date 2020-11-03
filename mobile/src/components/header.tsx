import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Texto </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    }
})