import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from "./style";
import WebView from 'react-native-webview';

const App = () => {

  const [value, setValue] = useState('');
  const[url, setUrl] = useState('');

  const handle = () => {
    setUrl(value);
  }

  return (
    <>
      <View style={styles.view1}>
        <View style={styles.view}>
          
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={(val) => setValue(val)}
            placeholderTextColor={'white'}></TextInput>


        </View>

        <TouchableOpacity onPress={handle} style={styles.button}>
          <Text style={{color:"#897FFF",}}>GO</Text>
        </TouchableOpacity>

      
        
      </View>
      <WebView source={{ uri: `${url}` }}></WebView>
    </>
  );
};

export default App;
