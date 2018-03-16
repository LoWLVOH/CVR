import React from 'react';
import { View} from 'react-native';
import { Text, Input } from 'react-native-elements';

function textAccount(props) {
  const { input, fieldName } = props;
  return (
    <View>
      <Input
        onChangeText={input.onChange}
        value={input.value}
        placeholder={ fieldName }
        enablesReturnKeyAutomatically={true}
      />
    </View>
  );
}

export default textAccount;
