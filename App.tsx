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

const App = (): JSX.Element => {
  return (
    <View>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
