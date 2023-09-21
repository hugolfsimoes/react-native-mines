import React from 'react';
import params from './src/params';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Field from './src/components/Field';

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
      <Field />
      <Field opened />
      <Field nearMines={8} opened />
      <Field nearMines={2} opened />
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
