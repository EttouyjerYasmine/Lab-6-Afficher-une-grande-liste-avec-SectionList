import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import AppFooter from '../../components/ui/AppFooter';
import AppHeader from '../../components/ui/AppHeader';
import MenuItems from '../../components/ui/MenuItems';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <AppHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});