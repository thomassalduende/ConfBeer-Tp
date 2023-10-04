import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import ConferenceList from './ConferenceList';
import ConferenceDetails from './ConferenceDetails';
import FormLogin from '../pages/FormLogin';
import { AuthLogin } from '../context/ContextFirebaseLogin';


const Stack = createStackNavigator();

const sesion = true
const Home = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const { user, Logaut } = AuthLogin();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user != null ? 'ConferenceList' : 'Login'}
                screenOptions={{
                    header: () => (

                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>ConfBeer</Text>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={toggleMenu}
                            >
                                <FontAwesome5 name="bars" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                    )
                }}
            >
                {user != null ? (
                    <>
                        <Stack.Screen name="ConferenceList" component={ConferenceList} options={{ title: 'Inicio' }} />
                        <Stack.Screen
                            name="ConferenceDetails"
                            component={ConferenceDetails}
                            options={{ title: 'Detalles de la Conferencia' }}
                        />
                    </>
                ) : (
                    <Stack.Screen name="Login" component={FormLogin} options={{ title: 'LoginGoogle' }} />
                )}
            </Stack.Navigator>

            {isMenuOpen && user != null && (
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setMenuOpen(false);
                            navigation.navigate('ConferenceList')
                            if (user != null) {
                                navigation.navigate()
                            } else {
                                // Navegar a la pantalla de inicio de sesión
                            }
                        }}
                    >
                        <Text style={styles.menuItemText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Logaut} style={styles.menuItem}>
                        <Text style={styles.menuItemText}>
                            <AntDesign name="closecircle" size={20} color="white" />
                            <Text> </Text>
                            Cerrar Sesion
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF5733',
        padding: 10,
        justifyContent: 'space-between',
    },
    menuButton: {
        padding: 10,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    menu: {
        backgroundColor: '#FF5733',
        position: 'absolute',
        top: 65,
        right: 0,
        width: 180,
        borderRadius: 5,
        elevation: 4, // Sombra para Android
        shadowColor: 'black', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuItemText: {
        fontSize: 16,
        color: 'white', // Color del texto del menú
    },
});

export default Home;
