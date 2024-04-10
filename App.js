import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Reproductor from './src/components/Reproductor';

export default function App() {
  const titleSong = '01 Metro Boomin – Am';
  return (
    <View style={styles.container}>
     <Reproductor titleSong={titleSong}></Reproductor>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#6424CC',
    borderRadius: 5,
  }
});
