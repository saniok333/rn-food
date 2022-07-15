import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import yelp from '../api/yelp';

export const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult();
  }, []);

  console.log(result);

  return <Text>ResultsScreen</Text>;
};

const styles = StyleSheet.create({});
