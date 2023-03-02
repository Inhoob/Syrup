import React from 'react';
import {View, ViewStyle} from 'react-native';

interface Props {
  width: number;
  height: number;
  children: React.ReactNode;
  style?: ViewStyle;
}

function RoundedCard({width, height, children}: Props) {
  const roundedCard = {
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
    width,
    height,
  };
  return <View style={roundedCard}>{children}</View>;
}

export default RoundedCard;
