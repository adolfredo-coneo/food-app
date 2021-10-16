import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState<string>('');

  const termSubmitHandler = () => {
    console.log(term);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeText={setTerm}
        onSubmit={termSubmitHandler}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
