import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText style={styles.TitleText}>The Game is Over!</TitleText>

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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleText: {
        marginTop: '5%'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
        color: Colors.eccent,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen;