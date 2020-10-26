import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import MapMarker from './src/images/map-marker-icon.png';

export default function App() {
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
          <Callout tooltip={true} onPress={() => {alert("oi")}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}> Oie </Text> 
            </View>
          </Callout>
        </Marker>
      </MapView>
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
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },
});
