import React from "react";
import { View, FlatList } from "react-native";
import BookDetail from "../components/BookDetail";
import bookData from "../json/book.json";

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1}}>
        <FlatList
        data={bookData.bookList}
        renderItem={({ item }) => 
        <BookDetail 
          bookList={item}       
          navigation={navigation}
        />}
        keyExtractor={item => item.title}
        
        />
      </View>
    );
  };
  
  export default HomeScreen;