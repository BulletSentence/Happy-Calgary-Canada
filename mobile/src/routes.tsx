import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphMap from './pages/OrphMap';
import OrphDetails from './pages/OrphDetails';
import OrphData from './pages/CreateOrph/OrphData';
import SelectMapPosition from './pages/CreateOrph/SelectMapPosition';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                    name="OrphMap" 
                    component={OrphMap}
                />
                 <Screen 
                    name="OrphDetails" 
                    component={OrphDetails}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                />
                <Screen 
                    name="OrphData" 
                    component={OrphData}
                />
            </Navigator>
        </NavigationContainer>
    );
}
