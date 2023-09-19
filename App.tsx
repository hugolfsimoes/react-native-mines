import React from 'react';
import type {PropsWithChildren} from 'react';
import params from './src/params';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines !</Text>
      <Text style={styles.instructions}>
        Tamanho da grade:{params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
