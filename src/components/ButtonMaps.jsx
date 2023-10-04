import { View, StyleSheet, Button, Linking } from 'react-native';

const ButtonMaps = ({ latitud, longitud }) => {

    const openInGoogleMaps = () => {

        const url = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;

        Linking.openURL(url)
            .then(() => {
                console.log('Abierto en Google Maps');
            })
            .catch((err) => {
                console.error('Error al abrir Google Maps:', err);
            });
    };

    return (
        <View style={styles.buttonContainer}>
            <Button color={'#007bff'} title="Abrir en Google Maps" onPress={openInGoogleMaps} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        color: 'white', // Cambia el color del texto a blanco
        fontWeight: 'bold',
    },
})

export default ButtonMaps;

