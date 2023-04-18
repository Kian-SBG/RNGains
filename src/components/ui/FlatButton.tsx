
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { buttonStyles } from '../../constants/styles';

function FlatButton(props: { children: ReactNode, onPress: () => void }) {
  return (
    <Pressable
      style={({ pressed }) => [buttonStyles.flatButton, pressed && buttonStyles.buttonPressed]}
      onPress={props.onPress}
    >
      <View>
        <Text style={buttonStyles.buttonText}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;