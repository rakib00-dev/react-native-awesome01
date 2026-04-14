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
import FancyCards from './src/components/FancyCards';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
