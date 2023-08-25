
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/login';
import Regster from '../screens/regster';
import Browse from '../screens/browse';
import Product from '../screens/product';

const Stack = createNativeStackNavigator();
const Navigation = () => {

    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="welcome" >
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="regster" component={Regster} />
                <Stack.Screen name="login" component={Login} />
                
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation