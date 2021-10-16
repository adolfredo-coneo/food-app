import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';
import { Business } from '../model/Results';

const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const [searchHandler, results, errorMessage] = useResults();

  const filterResultsByPrice = (price: string): Business[] => {
    return results.filter((result: Business) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onChangeText={setTerm}
        onSubmit={() => searchHandler(term)}
      />
      {errorMessage.length > 0 && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit pricer" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Big Spender!"
          results={filterResultsByPrice('$$$')}
        />
        <ResultsList title="Rich Boy!" results={filterResultsByPrice('$$$$')} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    flex: 1,
  },
});
