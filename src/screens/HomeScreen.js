import React from "react";
import { ScrollView,Text,StyleSheet,View } from 'react-native';


// Make a component
const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 44}}>
          <View style={styles.box}>
          <Text style={styles.Word}>Home</Text>
          </View>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    box:{
      marginTop:100,
      marginLeft:180,
    },
    Word:{
      flexDirection:"column",
      marginTop:5,
      fontSize: 15,
      fontWeight:"bold",
        
    },
});

export default HomeScreen;
  