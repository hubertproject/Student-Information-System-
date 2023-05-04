import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text> This is Calendar page </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF40BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
