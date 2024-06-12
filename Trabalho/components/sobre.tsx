import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './home';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Página Sobre</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'home') {
            return <Home />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}