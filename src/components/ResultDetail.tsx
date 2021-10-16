import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Business } from '../model/Results';

interface Props {
  result: Business;
}

const ResultDetail: React.FC<Props> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginVertical: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  rating: {
    fontSize: 14,
    color: '#999',
  },
});
