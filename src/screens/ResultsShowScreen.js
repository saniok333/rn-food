import { StyleSheet, View, Text } from 'react-native';

export const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  console.log(id);
  return <Text>ResultsScreen</Text>;
};

const styles = StyleSheet.create({});
