import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, SafeAreaView } from 'react-native';

const Splash = ({ navigation }) => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const buttonScale = useRef(new Animated.Value(1)).current;
    const buttonTranslateY = useRef(new Animated.Value(0)).current;

    const handleButtonPress = () => {
        setIsButtonPressed(true);
        Animated.parallel([
            Animated.timing(buttonScale, {
                toValue: 30,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(buttonTranslateY, {
                toValue: -20,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setIsButtonPressed(false);
            buttonScale.setValue(1);
            buttonTranslateY.setValue(0);
            navigation.navigate('Home');
        });
    };
    //sorry for two onPress with same function
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', position: 'relative', }}>
            <Text onPress={handleButtonPress} style={{ fontSize: 24, alignSelf: 'center', color: 'white', position: 'absolute', right: 17, bottom: 45, zIndex: 999, }}>+</Text>
            <Animated.View
                style={{
                    transform: [
                        { scale: buttonScale },
                        { translateY: buttonTranslateY },
                    ],
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: 'blue',
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        borderRadius: '50%',

                    }} onPress={handleButtonPress}>

                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    );
};

export default Splash;
