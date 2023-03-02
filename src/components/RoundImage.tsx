import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import Svg, {Circle, SvgCssUri} from 'react-native-svg';

interface RoundImageProps {
  source: string;
  size: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const RoundImage = ({source, size, style, color}: RoundImageProps) => {
  const radius = size / 2;
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      <Svg width={size} height={size}>
        <Circle cx={radius} cy={radius} r={radius} fill={color || 'black'} />
        <SvgCssUri
          x={size}
          y={size}
          width="100%"
          height="100%"
          uri={source}
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
};

export default RoundImage;
