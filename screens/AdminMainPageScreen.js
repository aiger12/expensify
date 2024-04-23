import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../theme'


export default function AdminMainPageScreen() {
    const backImage = require('../assets/images/back.png');
    const navigation = useNavigation();
    const [dataSource, setstate] = useState([
      {id: 1, title: 'aigerim.seitova1201@gmail.com'},
      {id: 2, title: ''},
    ]);

    const ItemView = ({item}) => {
      return(
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text style={styles.ItemStyle}>
          {item.id} {'. '} {item.title.toLowerCase()}
        </Text>
        </TouchableOpacity>
      )
    }
    const ItemSeparatorView = () => {
      return(
        <View style={styles.separator}/>
      )
    }
  return (
    <ImageBackground
    source={backImage}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      padding: 20,
    }}>
      <View className="relative mt-10">
                <Text style={{top:85, fontSize: 30, fontWeight: '700', left: 40}}>All authorized users</Text>
            </View>
      <FlatList
      style={{margin:10, top:120}}
      data={dataSource}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={ItemView}
    />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'white',
  },
  ItemStyle:{
    padding: 30,
    fontSize: 16
  }
});