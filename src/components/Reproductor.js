import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Reproductor(props) {
    return (
    <View>
      <View style={styles.innerContainer}/>
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Reproduciendo: </Text> {props.titleSong}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    innerContainer: {
      backgroundColor: '#9954FF',
      height: 50,
      width: 120,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: '200',
      color: '#fff',
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 12,
      left: 10,
    },
    subtitle: {
      fontWeight: 'bold',
    }
  });