import { StyleSheet, View, Text } from 'react-native';

export const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
