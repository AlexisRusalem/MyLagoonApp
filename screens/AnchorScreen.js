import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, Animated} from 'react-native';
import React, { useRef, useEffect } from 'react';
import Controls from '../components/Controls';
import { ProgressBar, Colors } from 'react-native-paper';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function AnchorScreen({ navigation }) {
  const anim = useRef(new Animated.Value(1));
  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: false,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1, 
          duration: 200,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/starboard.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Animated.View style={{position: 'absolute', top: 260, left: 230, zIndex: 1, transform: [{ scale: anim.current }] }}>
      <TouchableOpacity
          onPress={() => navigation.navigate("StarboardSensor")}
          style={[
              styles.block,
              { backgroundColor: 'green' },
          ]}>
      </TouchableOpacity>
      </Animated.View>
      <Text style={styles.label}>Starboard shroud tension</Text>
      <ProgressBar style={{width:"100%", height:25,marginBottom: 50}}progress={0.6} color="green" />
      <View style={styles.controls}>
          <Text style={styles.label}>Mesure</Text>
      </View>
      <View style={styles.footer}>

        <View style={styles.controlsRow}>
      

          <View style={styles.tensionContainer}>
            <Entypo name="chevron-left" size={30} color="gray" />
            <Text style={styles.temperatureText}>2458 kg</Text>
            <Entypo name="chevron-right" size={30} color="gray" />
          </View>
      

    
        </View>
       <View style={styles.mesure}>
        <Text style={styles.label}>New mesure</Text>
       </View>
        
      </View>
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
    width: 600,
    height:'50%',
    marginTop:20,
    marginLeft:-150, 
  },
  controls: {
    flex: 1,
    backgroundColor: '#323535',
    borderRadius: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  optionRow:{
    flexDirection:'row',
    marginVertical: 20,
    alignItems:'center',
  },
  optionText:{
    color: '#eee',
    fontSize: 18,
    fontWeight:'bold',
    marginLeft: 10,
  },
  block: {
    borderWidth: 4,
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
    alignItems: 'center',
    

  },
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  tensionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  mesure: {
    width:"80%",
    backgroundColor: '#323535',
    left:0,
    marginBottom:0, 
    borderRadius:20, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
 
});