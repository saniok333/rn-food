import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import yelp from '../api/yelp';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'san jose' },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  useEffect(() => {
    searchApi('star');
  }, []);

  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        term={term}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
