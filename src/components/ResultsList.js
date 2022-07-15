import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ResultsDetail } from '../components/ResultsDetail';

export const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
