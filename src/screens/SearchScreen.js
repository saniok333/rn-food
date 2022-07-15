import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { ResultsList } from '../components/ResultsList';
import useResults from '../hooks/useResults';

export const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        term={term}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
