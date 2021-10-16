import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import yelp from '../api/yelp';
import { Business } from '../model/Results';

interface Props {
  navigation: NavigationStackProp;
}

const ResultsShowScreen: React.FC<Props> = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState<Business | null>(null);

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data as Business);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      {result && (
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
        />
      )}
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 10,
  },
});
