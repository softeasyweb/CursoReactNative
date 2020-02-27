import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1759c1',
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={{ title: 'Usuarios' }}
                />
                <Stack.Screen
                    name="User"
                    component={User}
                    options={({ route }) => ({
                        title: route.params.user.name,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
