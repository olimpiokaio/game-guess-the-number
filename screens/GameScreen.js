import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import Card from '../components/Card';

const generatedRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generatedRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

// GAMESCREEN
const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generatedRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, serRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // desestruturar para não não chamar o useEffect quando a classe pai for renderizada
    // caso contrario o useEffect vai ser invocado,
    // e só queremos execulta-lo quando currentGuess, userChoice forem mudados!
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\'t lie!', 'You Know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'}
            ]);
            return;
        }
        if (direction == 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generatedRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        serRounds(curRounds => curRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <TitleText>Opponent's Guess</TitleText>
            <NumberContainer>
                { currentGuess }
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button 
                    title="LOWER"
                    onPress={nextGuessHandler.bind(this, 'lower')}
                />
                <Button 
                    title="GREATER"
                    onPress={nextGuessHandler.bind(this, 'greater')}
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;