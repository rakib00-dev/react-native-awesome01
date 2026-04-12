import {
  codegenNativeCommands,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { JSX } from 'react';

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'white',
    paddingHorizontal: 8,
  },
  container: { flex: 1, flexDirection: 'row', padding: 8 },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: { backgroundColor: '#ef5354' },
  cardTwo: { backgroundColor: '#99ef53' },
  cardThree: { backgroundColor: '#efda53' },
});
