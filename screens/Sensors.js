import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, Animated, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect, useNativeDriver } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons} from '@expo/vector-icons';

export default function Sensors({ navigation }) {
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

  const GradientButton = ({ onPress, title, colors }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <LinearGradient 
            colors={colors}
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/port.png')}
        style={styles.image}
        resizeMode='contain'
      />
  
      <Animated.View style={{position: 'absolute', top: 230, left: 305, zIndex: 1, transform: [{ scale: anim.current }] }}>
      <TouchableOpacity
          onPress={() => navigation.navigate("PortSensor")}
          style={[
              styles.block,
              { backgroundColor: 'red' },
          ]}>
      </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{position: 'absolute', top: 255, left: 65, zIndex: 1, transform: [{ scale: anim.current }] }}>
      <TouchableOpacity
          onPress={() => navigation.navigate("StarboardSensor")}
          style={[
              styles.block,
              { backgroundColor: 'gray' },
          ]}>
      </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{position: 'absolute', top: 160, left: 185, zIndex: 1, transform: [{ scale: anim.current }] }}>
      <TouchableOpacity
          onPress={() => navigation.navigate("StarboardSensor")}
          style={[
              styles.block,
              { backgroundColor: 'green' },
          ]}>
      </TouchableOpacity>
      </Animated.View>

      <GradientButton
        onPress={() => navigation.navigate("StarboardSensor")}
        title="Bow sensor"
        colors={['gray', 'gray']}
      />

      <GradientButton
        onPress={() => navigation.navigate("StarboardSensor")}
        title="Starboard sensor"
        colors={['#161818','green']}
      />
      <GradientButton
        onPress={() => navigation.navigate("PortSensor")}
        title="Port sensor"
        colors={['red', '#161818']}
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
    height:'50%',
    marginRight:20,
  },
  controls:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginVertical: 20,
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
  barContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bar: {
    height: 2,
    flex: 1,
    backgroundColor: 'white',
  },
  centerContent: {
    paddingHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    marginTop:10,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius:20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});