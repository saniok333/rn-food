import { StyleSheet, View, Text, Image } from 'react-native';

export const ResultsDetail = ({ result }) => {
  const { name, image_url, rating, review_count } = result;
  return (
    <View style={styles.containerStyle}>
      <Image source={{ uri: image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});
