import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from '../components/SearchBar';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        term={term}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>Search Screen {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
