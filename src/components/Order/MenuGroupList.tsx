import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {MenuGroupInfo} from '../../screens/Order';
import colors from '../../styles/colors';

interface Props {
  data: MenuGroupInfo[];
  onPress: (index: number) => void;
  menuGroup: number;
}

function MenuGroupList({data, onPress, menuGroup}: Props) {
  const renderItem = ({item, index}: {item: {name: string}; index: number}) => (
    <Pressable onPress={() => onPress(index)}>
      <View style={[styles.item, index === menuGroup && styles.selectedItem]}>
        <Text style={[text.item, index === menuGroup && text.selectedItem]}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    marginRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
  },
  selectedItem: {
    borderBottomColor: colors.greyishBrown,
  },
});

const text = StyleSheet.create({
  selectedItem: {
    fontWeight: 'bold',
    color: colors.greyishBrown,
  },
  item: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.2,
    color: colors.warmGrey,
  },
});

export default MenuGroupList;
