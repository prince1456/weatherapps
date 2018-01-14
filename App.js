import React from 'react'
import { StyleSheet, Text, View, TextInput, Image} from 'react-native'
import axios from 'axios'
import moment from 'moment'

const images ={
  clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
  Clouds: 'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
}


export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
          temp: 12,
          windSpeed: 12,
          pressure: 12,
          countryCode: '',
          minTemp: 2,
          city: '', 
          weather: 'clear'
    }
  }
  fetch =() => {
    this.fetchData(this.state.city)
  }
  fetchData =  (city) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=ff7feb49a21b2bc0b792c98578c02c33&units=metric'
    axios.get(url)
    .then(response => {
      console.log(response.data)
      this.setState({temp: response.data.main.temp, windSpeed: response.data.wind.speed, pressure: response.data.main.pressure,
         minTemp: response.data.main.temp_min,
        countryCode: response.data.sys.country,
        weather: response.data.weather[0].main
        })
    })
  }

  
  render() {
    const {city, temp, windSpeed, pressure, minTemp, countryCode, weather} = this.state
    return (
    
        <View style={styles.container}>
            <Image style={{position: 'absolute', width: '100%', height: '100%'}} source={{uri: images[weather] }} />
             <View style={styles.header}>
                <TextInput style={styles.textInput}
                  onEndEditing={e => this.fetch()}
                  onChangeText={text => this.setState({city: text})}
                  />
             </View>      
             <View style={styles.content}>
               <View>
                  <Text style={styles.temp}>
                     { Math.round(temp)}
                  </Text>
               </View>
               <View>
                <Text style={styles.cityName}>
                { city }
                </Text>
                <Text style={{ color: 'black', fontSize: 25, paddingLeft: 20,backgroundColor: 'transparent'}}>
                     {countryCode}
                </Text>
               </View>
               <View>
                  
               </View>
             </View>      
             <View style={styles.footer}>
                <View style={{justifyContent:'center', alignItems: 'center', flex: 1}}>
                  <Text style={{ fontSize: 15, color: 'red', paddingBottom: 20, backgroundColor: 'transparent'}}>
                     { moment().format('LLLL') }
                    </Text>
                </View>
                <View style={{flexDirection: 'row', paddingHorizontal: 20, flex: 3, paddingTop: 20 }}>
                  <View style={{flex: 1}}>
                      <Text style={{backgroundColor: 'transparent'}}>
                        pressure
                      </Text>
                      <Text style={{fontSize: 30, backgroundColor: 'transparent'}}>
                        {pressure}
                      </Text>
                  </View>
                  <View style={{flex: 1}}>
                      <Text style={{backgroundColor: 'transparent'}}>
                        Wind Speed
                      </Text>
                      <Text style={{fontSize: 30 , backgroundColor: 'transparent'}}>
                        {windSpeed}
                      </Text>
                  </View>
                  <View style={{flex: 1}}>
                      <Text style={{backgroundColor: 'transparent'}}>
                        min temp
                      </Text>
                      <Text style={{backgroundColor: 'transparent'}}>
                        { minTemp}
                      </Text>
                  </View>
                </View>
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
    backgroundColor: 'transparent',
    paddingLeft: 20,
  },
  cityName: {
    paddingTop: 40,
    paddingBottom: 50,
    backgroundColor: 'transparent',
    fontSize: 35,
    color: 'black',
    paddingLeft: 20,
  }
});
