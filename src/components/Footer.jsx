import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2023 ConfBeer - Concepción del Uruguay</Text>
            <Text style={styles.contactText}>Contáctanos: @ElTridente</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        padding: 22, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 16, 
    },
    contactText: {
        color: '#fff',
        fontSize: 14, 
    },
});


export default Footer;
