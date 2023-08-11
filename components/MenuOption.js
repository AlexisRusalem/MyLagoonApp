
import { Text, StyleSheet, TouchableOpacity  } from "react-native";
import { 

  AntDesign,
  MaterialIcons,
  
 } from '@expo/vector-icons';
 import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MenuOption = ({item, navigation }) => {
    return (
      <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate("Sensors")}>
        <AntDesign name="checksquare" size={24} color="gray" />
        <Text style={styles.optionText}>Test</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: 'auto' }}
        />
       </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    optionText: {
      color: '#eee',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });
  
  export default MenuOption;