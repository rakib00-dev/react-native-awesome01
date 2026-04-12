import {
  StyleSheet,
  Text,
  View,
  SafeAreaViewBase,
  ScrollView,
} from 'react-native';
import React, { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
