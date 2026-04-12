import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.ElevatedOne]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.ElevatedTwo]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.ElevatedThree]}>
          <Text>Horizental</Text>
        </View>
        <View style={[styles.card, styles.ElevatedOne]}>
          <Text>Left</Text>
        </View>
        <View style={[styles.card, styles.ElevatedTwo]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.ElevatedThree]}>
          <Text>Right</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'white',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 4,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'yellow',
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  ElevatedOne: { backgroundColor: '#ef5354' },
  ElevatedTwo: { backgroundColor: '#99ef53' },
  ElevatedThree: { backgroundColor: '#efda53' },
});
