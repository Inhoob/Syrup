import {Image, View, Text} from 'react-native';
import React from 'react';
function Search() {
  return (
    <View>
      <Text>Search page</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

export default Search;
