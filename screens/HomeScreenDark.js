import React, { useEffect, useState } from 'react'; 
import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'; 
import { useIsFocused, useNavigation } from '@react-navigation/native'; 
import { useSelector } from 'react-redux'; 
import { signOut } from 'firebase/auth'; 
import { getDoc, getDocs, query, where } from 'firebase/firestore'; 
import ScreenWrapper from '../components/screenWrapper'; 
import { colors, lightStyles, darkStyles } from '../theme'; 
import randomImage from '../assets/images/randomImage'; 
import EmptyList from '../components/emptyList'; 
import { auth, tripsRef } from '../config/firebase'; 
 
const items = [ 
  { 
    id: 1, 
    place: 'Gujrat', 
    country: 'Pakistan', 
  }, 
  { 
    id: 2, 
    place: 'London Eye', 
    country: 'England', 
  }, 
  { 
    id: 3, 
    place: 'Washington dc', 
    country: 'America', 
  }, 
  { 
    id: 4, 
    place: 'New york', 
    country: 'America', 
  }, 
]; 
 
export default function HomeScreenDark() { 
  const navigation = useNavigation(); 
  const backImage = require('../assets/images/back.png');
  const { user } = useSelector((state) => state.user); 
  const [trips, setTrips] = useState(items); 
  const [theme, setTheme] = useState('default'); 
 
  const isFocused = useIsFocused(); 
 
  const fetchTrips = async () => { 
    const q = query(tripsRef, where('userId', '==', user.uid)); 
    const querySnapshot = await getDocs(q); 
    let data = []; 
    querySnapshot.forEach((doc) => { 
      data.push({ ...doc.data(), id: doc.id }); 
    }); 
    setTrips(data); 
  }; 
 
  useEffect(() => { 
    if (isFocused) fetchTrips(); 
  }, [isFocused]); 
 
  const handleLogout = async () => { 
    await signOut(auth); 
  }; 
 
  const toggleTheme = () => { 
    if (theme === 'default') { 
      setTheme('light'); 
    } else if (theme === 'light') { 
      setTheme('dark'); 
    } else { 
      setTheme('default'); 
    } 
  }; 
 
  const containerStyle = { 
    ...styles.container, 
    ...(theme === 'light' ? lightStyles.container : theme === 'dark' ? darkStyles.container : {}), 
  }; 
 
  const headerTextStyle = { 
    ...styles.headerText, 
    ...(theme === 'light' ? lightStyles.headerText : theme === 'dark' ? darkStyles.headerText : {}), 
  }; 
 
  const logoutButtonStyle = { 
    ...styles.logoutButton, 
    ...(theme === 'light' ? lightStyles.logoutButton : theme === 'dark' ? darkStyles.logoutButton : {}), 
  }; 
 
  return ( 
    <ImageBackground
    source={backImage}
    // eslint-disable-next-line react-native/no-inline-style
    >
    <ScreenWrapper className="flex-1">
        <View className="flex-row justify-between items-center p-4">
            <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>ExpensifyD</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.themeToggleButton}> 
          <Text style={styles.themeToggleButtonText}>Dafault</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('HomeLight')} style={styles.themeToggleButton}> 
          <Text style={styles.themeToggleButtonText}>Light</Text> 
        </TouchableOpacity>  
            <TouchableOpacity onPress={()=> navigation.navigate('Welcome')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                <Text className={colors.heading}>Logout</Text>
            </TouchableOpacity>
      </View> 
              <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
            <Image source={require('../assets/images/banner.png')} className="w-60 h-60" />
        </View>
        <View className="px-4 space-y-3">
            <View className="flex-row justify-between items-center">
                <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
                <TouchableOpacity 
                    onPress={()=> navigation.navigate('AddTrip')} 
                    className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                    <Text className={colors.heading}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 430}}>
                <FlatList 
                    data={trips}
                    numColumns={2}
                    ListEmptyComponent={<EmptyList message={"You haven't recorded any trips yet"} />}
                    keyExtractor={item=> item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    className="mx-1"
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity onPress={()=> navigation.navigate('TripExpenses', {...item})} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                                <View>
                                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                                    <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                    <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    </ScreenWrapper>
    </ImageBackground>
  ); 
} 
 
const styles = { 
  themeToggleButton: { 
    padding: 8, 
    paddingHorizontal: 12, 
    backgroundColor: colors.white, 
    borderWidth: 1, 
    borderColor: colors.grayLight, 
    borderRadius: 20, 
  }, 
  themeToggleButtonText: { 
    color: colors.heading, 
  }, 
};