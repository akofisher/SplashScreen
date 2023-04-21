import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                alignSelf: 'flex-start',
                marginBottom: 50,
            }} onPress={() => navigation.goBack()}>
                <Text style={styles.title}>Go Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Task is done ^_^</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});

export default HomeScreen;