import React from 'react';
import { View} from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

function DropAccount2(props) {
  const { input, labelName, data } = props;
  return (
    <View>
      <Dropdown
      label={ labelName }
      data={ data }
      containerStyle={{width: 120}}
      // baseColor="#000"
      // textColor="#000"
      labelFontSize={18}
      fontSize={18}
      onChangeText = {input.onChange}
      value = {input.value}
    />
    </View>
  );
}

export default DropAccount2;
