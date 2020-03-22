import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')} 
                    style={styles.image}
                    resizeMode="cover" />
            </View>

            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText} >
                    Your phone needed
                    <Text style={styles.highlight}> {props.roundsNumber} </Text> 
                    rounds to guess a number
                    <Text style={styles.highlight}> {props.userNumber} </Text>
                </BodyText>
            </View>

            <MainButton onPress={props.onRestart}>
                <Text>RESTART</Text>
            </MainButton>        
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: Colors.eccent,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen;