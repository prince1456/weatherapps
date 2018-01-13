import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    
        <View style={styles.container}>
             <View style={styles.header}>
                 <TextInput style={styles.textInput} />
             </View>      
             <View style={styles.content}>
               <View>
                  <Text style={styles.temp}>
                     12
                  </Text>
               </View>
               <View>
                <Text style={styles.cityName}>
                     City Name
                </Text>
                <Text style={{ color: 'black', fontSize: 25, paddingLeft: 20,}}>
                     Country Name
                </Text>
               </View>
               <View>
                  
               </View>
             </View>      
             <View style={styles.footer}>
              <Text>
                 footer
               </Text>
             </View>      
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
  content: {
    width: '100%',
    flex: 3,
    
  },
  footer:{
    width: '100%',
    flex: 2,
    backgroundColor: 'skyblue'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: 'grey'
  },
  temp: {
    paddingTop: 50,
    fontSize: 60,
    color: 'black',
    paddingLeft: 20,
  },
  cityName: {
    paddingTop: 40,
    paddingBottom: 50,
    fontSize: 35,
    color: 'black',
    paddingLeft: 20,
  }
});
