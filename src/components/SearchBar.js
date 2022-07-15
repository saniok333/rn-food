import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
    marginHorizontal: 15,
  },
});
