import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import conferences from '../data/confbeer.js';
import ButtonMaps from './ButtonMaps.jsx'
import { useNavigation } from '@react-navigation/native';

const ConferenceDetails = ({ route }) => {
    const { id } = route.params;
    const conference = conferences.find((conf) => conf.id === id);

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Detalles de la Conferencia</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Nombre de la Conferencia:</Text>
                <Text style={styles.text}>{conference.nombre_conferencia}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Disertante:</Text>
                <Text style={styles.text}>{conference.nombre_disertante}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Hora de Inicio:</Text>
                <Text style={styles.text}>{conference.hora_inicio}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.label}>Hora de Finalización:</Text>
                <Text style={styles.text}>{conference.hora_finalizacion}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonMaps latitud={conference.latitud} longitud={conference.longitud} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Atrás"
                    onPress={handleGoBack}
                    color="#333"
                    style={styles.backButton}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    detailsContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    buttonContainer: {
        marginTop: 20,
    },
    backButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#333',
        fontWeight: 'bold',
    },
});

export default ConferenceDetails;
