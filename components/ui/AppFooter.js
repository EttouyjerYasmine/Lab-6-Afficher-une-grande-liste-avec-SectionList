import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by My Restaurant, 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 10,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333333',
  },
});