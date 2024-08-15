import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CircleButton = ({onPress}) => {
    return (
        <View style={styles.CircleButtonContainer} >
            <Pressable style={styles.CircleButton} onPress={onPress} >
                <MaterialIcons name='add' size={38} color="#25292e"/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    CircleButton:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 42,
        padding: 3
    },
    CircleButtonContainer:{
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#aaf',
        borderRadius: 42,
        padding: 3,
    }
})

export default CircleButton;
