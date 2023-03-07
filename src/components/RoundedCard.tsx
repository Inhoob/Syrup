import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Pressable} from 'react-native';
interface Props {
  children: React.ReactNode;
  width: number;
  height: number;
  borderRadius?: number;
  shadowColor?: string;
  backgroundColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

function RoundedCard({
  children,
  width,
  height,
  borderRadius,
  shadowColor,
  backgroundColor,
  onPress,
  style,
}: Props) {
  const roundedCard = {
    borderRadius: borderRadius || 20,
    marginHorizontal: 5,
    marginBottom: 5,
    shadowColor: shadowColor || '#000000',
    backgroundColor: backgroundColor || 'white',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    shadowOpacity: 0.25,
    elevation: 1,
    padding: 20,
    width: width,
    height: height,
    ...style,
  };
  return (
    <Pressable onPress={onPress}>
      <View style={roundedCard}>{children}</View>
    </Pressable>
  );
}

export default RoundedCard;
