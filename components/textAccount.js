import React from 'react';
import { View} from 'react-native';
import { Text, Input } from 'react-native-elements';

function textAccount(props) {
  const { input, fieldName, type } = props;
  console.log(type);
  console.log(props);
  return (
    <View>
      <Input
        onChangeText={input.onChange}
        value={input.value}
        placeholder={ fieldName }
        secureTextEntry={type}
      />
    </View>
  );
}

export default textAccount;
