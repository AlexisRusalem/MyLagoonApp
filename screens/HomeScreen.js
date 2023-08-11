import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Switch, Button, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, Fontisto, MaterialCommunityIcons, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import data from '../assets/data';
import Options from '../assets/data';
import Controls from '../components/Controls';


export default function HomeScreen({ navigation }) {
  const [activeModeId, setActiveModeId] = React.useState(null);

  const handleModeToggle = (modeId) => {
    if (modeId === activeModeId) {
      setActiveModeId(null);
    } else {
      setActiveModeId(modeId);
    }
  };

  const renderSwitch = (item) => {
    if (item.switchVisible) {
      return (
        <Switch
          style={{ marginRight: 20}}
          value={item.id === activeModeId}
          onValueChange={() => handleModeToggle(item.id)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Lagoon 42</Text>
          <Text style={styles.subtitle}>In navigation</Text>  
        </View>
        <FontAwesome name="user-circle-o" size={24} color="gray" />
      </View>
      <Image
        source={require('../lagoon42.png')}
        style={styles.image}
        resizeMode={'contain'}
      />
      <FlatList
      data={data} // Remplacez Options par le nom approprié de votre tableau de données
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        
        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate(item.name)}>
          <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: "space-between", alignItems: 'center' }}>
            <Text style={[styles.optionText, item.active && styles.activeItemTitle]}>{item.name}</Text>
              {renderSwitch(item)}
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="gray"
            style={{ marginLeft: 'auto' }}
          />
       </TouchableOpacity>
      )}
      ListHeaderComponent={Controls} // Utilisez simplement le nom du composant sans les parenthèses
      
    />
    <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'#161818',
  },
  header: {
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    fontSize: 24,
    color: '#eee',
    fontWeight:'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    fontWeight:'700',
  },
  image: {
    width: '100%',
    height:300,
  },
  controls:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginVertical: 20,
  },
  optionRow:{
    flexDirection:'row',
    marginVertical: 15,
    alignItems:'center',
  },
  optionText:{
    color: '#eee',
    fontSize: 18,
    fontWeight:'bold',
    marginLeft: 10,
  },
  activeItemTitle: {
    fontWeight: 'bold',
  },
});