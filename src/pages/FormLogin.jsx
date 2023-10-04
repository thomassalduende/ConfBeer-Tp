import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import foto from '../assets/google.png'
import { AuthLogin } from '../context/ContextFirebaseLogin';

const FormLogin = () => {
    const { googleSingIn } = AuthLogin()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ConfBeer</Text>
            <View>
                <TouchableOpacity onPress={googleSingIn} style={styles.google}>
                    <Image
                        source={foto}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Iniciar sesión con Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F7E3C3',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#FF5733',
    },
    google: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 2,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default FormLogin;
