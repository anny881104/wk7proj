import React from "react";
import { ScrollView,Text,StyleSheet,View } from 'react-native';

// Make a component
const FavoritesScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44}}>
             <View style={styles.box}>
           <Text style={styles.word}>YOU DON'T HAVE ANY FAVORITES</Text>
          </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    box:{
        flex:1, 
        marginTop:200,
        alignItems:"center",
        justifyContent:"center",
      },
      word:{
          fontSize: 15,
          fontWeight:"bold",
        },
});

export default FavoritesScreen;