import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import * as React from 'react';

export default function LoadURL({ eturl }) {
  //cosnt get_urls;

  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <WebView
        source={{ uri: eturl }}
      />
    </View>
  );
}
