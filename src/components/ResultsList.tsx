import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

import { Business } from '../model/Results';
import ResultDetail from './ResultDetail';

interface Props {
  title: string;
  results: Business[];
  navigation: NavigationStackProp;
}

const ResultsList: React.FC<Props> = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
          >
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  result: {
    fontSize: 16,
    marginRight: 10,
  },
});
