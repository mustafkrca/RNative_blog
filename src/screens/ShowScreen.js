import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react'; 
import { Context } from '../context/BlogContext';

export default function ShowScreen({ route }) {
    const { state } = useContext(Context);
    const id = route.params.id;
    const item = state.find((item) => item.id === id);
  
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <Text style={styles.sectionContent}>{item.content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    section: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 18,
        lineHeight: 24,
    },
});
