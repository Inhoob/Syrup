import React from 'react';
import {Pressable, ViewStyle} from 'react-native';

interface Props {
  onPress: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
}

const BtnCTA = ({onPress, style, children}: Props) => {
  return (
    <Pressable
      style={[
        {
          backgroundColor: 'white',
          padding: 10,
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default BtnCTA;
