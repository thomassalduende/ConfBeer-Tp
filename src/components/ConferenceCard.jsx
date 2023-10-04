import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ConferenceCard = ({ id, imagen, nombre_conferencia, nombre_disertante, hora_inicio, hora_finalizacion }) => {
    const navigation = useNavigation();

    const handleConferencePress = () => {
        navigation.navigate('ConferenceDetails', { id });
    };

    return (
        <TouchableOpacity onPress={handleConferencePress} style={styles.card}>
            <Image source={{ uri: imagen }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.conferenceName}>{nombre_conferencia}</Text>
                <Text style={styles.speakerName}>{nombre_disertante}</Text>
                <Text style={styles.time}>
                    Hora: {hora_inicio} - {hora_finalizacion}
                </Text>
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2, // Sombra para Android
        shadowColor: 'black', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
        shadowOpacity: 0.2, // Sombra para iOS
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    conferenceName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    speakerName: {
        fontSize: 14,
        color: 'gray',
    },
    time: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ConferenceCard;
