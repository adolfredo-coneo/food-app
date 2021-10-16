import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  term: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

const SearchBar: React.FC<Props> = ({ term, onChangeText, onSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={term}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 10,
    padding: 10,
    margin: 15,
    flexDirection: 'row',
  },
  searchIcon: {
    fontSize: 30,
    color: '#000',
    marginRight: 10,
    alignSelf: 'center',
  },
  searchInput: {
    fontSize: 18,
    color: '#000',
    flex: 1,
  },
});
