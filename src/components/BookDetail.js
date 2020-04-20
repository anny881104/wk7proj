import React from "react";
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Linking} from "react-native";
const BookDetail = ({ bookList,navigation }) => {
  return(
  <View>
    <ScrollView>
    <View>
            <View style={styles.cardStyle}>
                <Image 
                    source={{uri:bookList.image}}
                    style={{ width: 106, height: 160 }}
                />
                <View style={styles.textStyle}>
                <Text style={styles.booktitle}>{bookList.booktitle}</Text>
                <Text style={styles.writer}>{bookList.writer}</Text>
                <Text style={styles.about}>{bookList.about}</Text>
                <Image 
                        source={{uri: "https://raw.githubusercontent.com/anny881104/wk7proj/master/assets/gl.png"}}
                        style={{ width: 220, height: 3}}
                    />
                <Text style={styles.percent}>{bookList.percent}</Text>
                </View>
            </View>
            <View style={styles.cardStyle}>
                    <Image 
                        source={{uri: "https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/3AB415A0-C0BF-45E9-9F48-C487868C06F7.png"}}
                        style={{ width: 106, height: 160 }}
                    />
                    <View style={styles.textStyle}>
                    <Text style={styles.booktitle}>Grist Mill Road</Text>
                    <Text style={styles.writer}>Christopher J.</Text>
                    <Text style={styles.about}>Twenty-six years ago Hannah had her eye shot out. Now she wants…</Text>
                    <Image 
                        source={{uri: "https://raw.githubusercontent.com/anny881104/wk7proj/master/assets/l.png"}}
                        style={{ width: 220, height: 3}}
                    />
                    <Text style={styles.startread}>START READ</Text>
                    </View>
           </View>
          <View style={styles.cardStyle}>
                    <Image 
                        source={{uri: "https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/AFD86D33-1C82-4533-AF0F-604928A43DC3.png"}}
                        style={{ width: 106, height: 160 }}
                    />
                    <View style={styles.textStyle}>
                    <Text style={styles.booktitle}>The Immortalists</Text>
                    <Text style={styles.writer}>Chloe Benjamin</Text>
                    <Text style={styles.about}>Street art is colorful, vibrant, diverse and exciting.Now, you can create…</Text>
                    <Image 
                        source={{uri: "https://raw.githubusercontent.com/anny881104/wk7proj/master/assets/l.png"}}
                        style={{ width: 220, height: 3}}
                    />
                    <Text style={styles.startread}>START READ</Text>
                    </View>
        </View>
              

    </View>
    </ScrollView>
      

</View>
);
};
const styles = StyleSheet.create({

  cardStyle:{
      backgroundColor: "#f8f8f8",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection:"row",
      height: 195, 
      borderWidth: .5,
      borderColor: "#ddd",
  },
  textStyle:{
      flexDirection:"column",
      alignContent:"flex-start",
      justifyContent:"space-between",
  },
  booktitle:{
      fontSize: 20,
      fontWeight:"bold",
      color:"#2e2e2e",
      marginBottom:11,
  },
  writer:{
      fontSize: 16,
      color:"#717171",
      marginBottom:11,
  }, 
  about:{
      fontSize: 13,
      width:208,
      marginBottom:12,
      color:"#b1b1b1",
      flexWrap:"nowrap",
  },
  percent:{
      fontSize: 12,
      marginTop:14,
      color:"#b1b1b1",
  },
  startread:{
      fontSize: 15,
      fontWeight:"bold",
      color:"#ff6767",
      marginTop:14,
  },
  
    
});

export default BookDetail;
