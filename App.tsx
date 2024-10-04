import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Input } from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
      <Button text='hello world' />
      <Button text='hello world' variant='green' />
      <Input  label='Insira seu numero' />
      <StatusBar style="auto" />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    backgroundColor: 'green',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
