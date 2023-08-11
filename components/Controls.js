import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar, Colors } from 'react-native-paper';

const Controls = ({ navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleLogoPress = (logo) => {
    setSelectedIcon((prevIcon) => (prevIcon === logo ? null : logo));
  };

  return (
    <View style={styles.controls}>
      <View style={styles.subsection}>
        <TouchableOpacity onPress={() => handleLogoPress('idcard')}>
          <AntDesign name="idcard" size={24} color={selectedIcon === 'idcard' ? 'white' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogoPress('information-circle')}>
          <Ionicons
            name="information-circle"
            size={24}
            color={selectedIcon === 'information-circle' ? 'white' : 'gray'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogoPress('flash')}>
          <Entypo name="flash" size={24} color={selectedIcon === 'flash' ? 'white' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogoPress('water')}>
          <Ionicons name="water" size={24} color={selectedIcon === 'water' ? 'white' : 'gray'} />
        </TouchableOpacity>
      </View>

      {selectedIcon === 'idcard' && (
        <>
          <View style={styles.line} />
          <View style={styles.section}>
            <Text style={styles.subtitle}>Boat ID card</Text>
            <Text style={styles.subtitle}>Insurance</Text>
            <Text style={styles.subtitle}>Boat License</Text>
          </View>
        </>
      )}

      {selectedIcon === 'information-circle' && (
        <>
          <View style={styles.line} />
          <View style={styles.section}>
            <Text style={styles.subtitle}>Length : 12,80 m</Text>
            <Text style={styles.subtitle}>Width : 7,70 m</Text>
            <Text style={styles.subtitle}>Draft : 1,25 m</Text>
          </View>
        </>
      )}

      {selectedIcon === 'flash' && (
        <>
          <View style={styles.line} />
          <View style={styles.section}>
            <View style={styles.subsubsection}>
              <MaterialCommunityIcons name="car-battery" size={24} color="gray" />
              <Text style={styles.subtitle}>Motor : 13.9 V</Text>
            </View>
            <View style={styles.subsubsection}>
              <MaterialCommunityIcons name="car-battery" size={24} color="gray" />
              <Text style={styles.subtitle}>Service 1 : 11.9 V</Text>
            </View>
            <View style={styles.subsubsection}>
              <MaterialCommunityIcons name="car-battery" size={24} color="gray" />
              <Text style={styles.subtitle}>Service 2 : 12.5 V</Text>
            </View>
          </View>
        </>
      )}

      {selectedIcon === 'water' && (
        <>
          <View style={styles.line} />
          <View style={styles.section}>
            <View style={styles.subsubsection}>
              <MaterialCommunityIcons name="water" size={24} color="gray" />
              <Text style={styles.subtitle}>Tank 1 : 300 L</Text>
            </View>
            <View style={styles.subsubsection}>
              <MaterialCommunityIcons name="water-alert" size={24} color="gray" />
              <Text style={styles.subtitle}>Tank 2 : 50 L</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  subtitle: {
    color: 'gray',
    fontWeight: '700',
    padding: 10,
  },
  subsection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  subsubsection: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  controls: {
    flex: 1,
    padding: 0,
    backgroundColor: '#323535',
    borderRadius: 25,
  },
  section: {
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    opacity: 0.3,
  },
});
