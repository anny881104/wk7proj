import React from "react";
import { ScrollView,Text,StyleSheet } from 'react-native';

// Make a component
const FavoritesScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44}}>
            <Text style={styles.Word}>YOU DON'T HAVE ANY FAVORITES</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({

    Word:{
        marginLeft:85,
        marginTop:100,
        fontSize: 15,
        fontWeight:"bold",
        
    },
});

export default FavoritesScreen;