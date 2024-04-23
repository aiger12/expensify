import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../config/firebase';
import { setUser } from '../redux/slices/user';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddTripScreen from '../screens/AddTripScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomScreen from '../screens/WelcomScreen';
import GuestScreen from '../screens/GuestScreen';
import BeforeAuthScreen from '../screens/BeforeAuthScreen';
import AdminMainPageScreen from '../screens/AdminMainPageScreen';
import HomeScreenLight from '../screens/HomeScreenLight';
import HomeScreenDark from '../screens/HomeScreenDark';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const {user} = useSelector(state=> state.user);

    const dispatch = useDispatch();

    onAuthStateChanged(auth, u=>{
        // console.log('got user: ',u);
        dispatch(setUser(u));
    })

    if(user){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} />
                    <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Guest" component={GuestScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Before" component={BeforeAuthScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Admin" component={AdminMainPageScreen} />
                    <Stack.Screen options={{headerShown: false}} name="HomeLight" component={HomeScreenLight} />
                    <Stack.Screen options={{headerShown: false}} name="HomeDark" component={HomeScreenDark} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }else{
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Before">
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignInScreen} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUpScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} />
                    <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Guest" component={GuestScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Before" component={BeforeAuthScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Admin" component={AdminMainPageScreen} />
                    <Stack.Screen options={{headerShown: false}} name="HomeLight" component={HomeScreenLight} />
                    <Stack.Screen options={{headerShown: false}} name="HomeDark" component={HomeScreenDark} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    
  }