import { StyleSheet, View, Text } from 'react-native';

export const ResultsDetail = ({ result }) => {
  const { name } = result;
  return <Text>{name}</Text>;
};

const styles = StyleSheet.create({});
