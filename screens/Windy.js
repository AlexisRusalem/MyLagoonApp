
import { StyleSheet, Image, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const apiKey = 'nHniB3MKIOaJNdHSJNZaEzSMl1XxGL1T';
const url = `https://embed.windy.com/?key=${apiKey}`;


export default function Windy({ navigation }) {
  return (
      <WebView
        source={{ uri: 'https://embed.windy.com/' }}
        style={{ flex: 1 }}
/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'#161818',
  },
});







