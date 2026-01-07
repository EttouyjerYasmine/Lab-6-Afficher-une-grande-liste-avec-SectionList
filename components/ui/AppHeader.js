import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingTop: 50,
    paddingBottom: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
});