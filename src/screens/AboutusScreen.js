import React from "react";
import { ScrollView,Text,StyleSheet } from 'react-native';

// Make a component
const AboutusScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44}}>
            <Text style={styles.Word}>NOTHING ABOUT US</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({

    Word:{
        marginLeft:130,
        marginTop:100,
        fontSize: 15,
        fontWeight:"bold",
        
    },
});

export default AboutusScreen;