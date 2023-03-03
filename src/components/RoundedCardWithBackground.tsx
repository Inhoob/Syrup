import React from 'react';
import {
  View,
  ImageBackground,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  source: ImageSourcePropType;
}
function RoundedCardWithBackground({children, style, source}: Props) {
  const roundedCard = {
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 5,
    shadowColor: '#000000',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    shadowOpacity: 0.25,
    elevation: 1,
    ...style,
  };
  return (
    <View style={roundedCard}>
      <ImageBackground
        style={{
          flex: 1,
          overflow: 'hidden',
          borderRadius: 20,
          opacity: 0.6,
          padding: 20,
        }}
        source={source}>
        <View style={{opacity: 1}}>{children}</View>
      </ImageBackground>
    </View>
  );
}

export default RoundedCardWithBackground;
