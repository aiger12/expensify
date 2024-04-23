import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../theme'


export default function BeforeAuthScreen() {
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
         <View>
            <View className="relative mt-10">
                <Text className={`text-xl font-bold text-center`} style={{top:250}}>Please, select a role</Text>
            </View>
            <View style={{top: 160, marginLeft: 20, marginRight: 20}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Admin')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button, top: 120}}>
                <Text className="text-center text-white text-lg font-bold">Admin</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Welcome')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button, top: 120}}>
                <Text className="text-center text-white text-lg font-bold">User</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
  )
}