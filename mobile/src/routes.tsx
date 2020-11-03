import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphMap from './pages/OrphMap';
import OrphDetails from './pages/OrphDetails';
import OrphData from './pages/CreateOrph/OrphData';
import SelectMapPosition from './pages/CreateOrph/SelectMapPosition';
import Header from './components/header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }}>
                <Screen 
                    name="OrphMap" 
                    component={OrphMap}
                />
                 <Screen 
                    name="OrphDetails" 
                    component={OrphDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancelBtn={false} title='Detalhe'/>
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Secione o local no Mapa'/>
                    }}
                />
                <Screen 
                    name="OrphData" 
                    component={OrphData}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Informe os dados'/>
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
