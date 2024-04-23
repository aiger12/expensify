import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../theme'

export default function GuestScreen() {
    const backImage = require('../assets/images/back.png');
    const navigation = useNavigation();
  return (
    <ImageBackground
    source={backImage}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      padding: 20,
    }}>
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
            <View className="relative mt-3">
                <Text className={`text-xl font-bold text-center`}>EXPENSIFY</Text>
            </View>
            <View style={{top: 60, marginLeft: 20, marginRight: 20}}>
                <Text className={`${colors.heading} text-lg font-bold`}>Efxpencify is a straightforward app that 
                allows you to keep track of your expenses for a given trip.</Text>
                <Text  style={{top: 60}} className={`${colors.heading} text-lg `}>You can add places where you've been, and add purchase cards for each location.</Text>
                <Image source={require('../assets/images/screen.jpg')} style={{top:85,left: 20, width:260, height:300}}></Image>
                <TouchableOpacity onPress={()=> navigation.navigate('Welcome')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button, top: 120}}>
                <Text className="text-center text-white text-lg font-bold">Back</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScreenWrapper>
    </ImageBackground>
  );
}