import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { ResultsList } from '../components/ResultsList';
import useResults from '../hooks/useResults';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        term={term}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({});
