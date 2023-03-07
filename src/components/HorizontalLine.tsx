import {View} from 'react-native';
import React from 'react';
interface Props {
  backgroundColor: string;
}
function HorizontalLine({backgroundColor}: Props) {
  return <View style={{height: 1, backgroundColor: backgroundColor}} />;
}

export default HorizontalLine;
