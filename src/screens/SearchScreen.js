import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from '../componrnts/SearchBar';

export const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
