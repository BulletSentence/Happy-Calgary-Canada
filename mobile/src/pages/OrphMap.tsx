import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapMarker from '../images/map-marker-icon.png';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphMap() {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleNavigateToOrphDetails() {
    navigation.navigate('OrphDetails');
  }

  function handleNavigateToCreateOrph() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -15.7217175,
          longitude: -48.0774442,
          latitudeDelta: 30.018,
          longitudeDelta: 30.028,
        }}>
        <Marker
          icon={MapMarker}
          calloutAnchor={{
            x: 0,
            y: 0,
          }}
          coordinate={{
            latitude: -15.7217175,
            longitude: -48.0774442,
          }}>
          <Callout tooltip={true} onPress={handleNavigateToOrphDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}> Oie </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Encontrei dois
            </Text>
        <RectButton style={styles.cObutton} onPress={handleNavigateToCreateOrph}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 5,
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },

  cObutton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
