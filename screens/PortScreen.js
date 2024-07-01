import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, Animated} from 'react-native';
import React, { useRef, useEffect } from 'react';
import Controls from '../components/Controls';
import { ProgressBar, Colors } from 'react-native-paper';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import SemiCircleProgress from '../components/SemiCircleProgress';

export default function PortSensor({ navigation }) {
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
        source={require('../assets/port2.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Animated.View style={{position: 'absolute', top: 225, left: 280, zIndex: 1, transform: [{ scale: anim.current }] }}>
      <TouchableOpacity
          onPress={() => navigation.navigate("StarboardSensor")}
          style={[
              styles.block,
              { backgroundColor: 'red' },
          ]}>
      </TouchableOpacity>
      </Animated.View>
      <View style={styles.mesure}>
      {<SemiCircleProgress
        percentage={30}
        progressColor={"red"}
      >
        <Text style={{ fontSize: 32, color: "white" }}>1243 kg</Text>
      </SemiCircleProgress> }
      </View>
      <Text style={styles.label}>You need to increase the tension in the port shroud ! </Text>
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
    color: 'green',
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
    marginTop: 0,
    marginBottom: 'auto',
  },
  label: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 50,
    alignItems: 'center',
    textAlign:'center',
    marginLeft:20,
    

  },
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  tensionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 10,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  mesure: {
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    
  },
 
});