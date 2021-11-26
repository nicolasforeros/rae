import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';
import { IFactor, IQuestion } from '../../common/types/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';

interface IProps {
  id: number;
  factor: IFactor;
  onHandleChange: (id: number, value: string) => void;
}

const Factor = ({ id, factor, onHandleChange }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {factor.name}{' '}
          <Text style={styles.idText}>{`[${id+1}]`}</Text>
        </Text>
      </View>
      <View style={styles.radioGroup}>
        <RadioButton
          id={'yes'}
          label="Si"
          value="yes"
          size={16}
          color={Color.PRIMARY}
          labelStyle={styles.radioButton}
          selected={factor.isYes}
          onPress={(value) => onHandleChange(id, value)}
        />
        <RadioButton
          id={'no'}
          label="No"
          value="no"
          size={16}
          color={Color.PRIMARY}
          labelStyle={styles.radioButton}
          selected={factor.isYes === false}
          onPress={(value) => onHandleChange(id, value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingBottom: 30,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 20,
    marginRight: 20,
    color: Color.TEXT_QUESTION,
    fontFamily: Font.REGULAR,
    fontSize: FontSize.INPUT,
    textAlign: 'center'
  },
  idText:{
    color: Color.TEXT_QUESTION,
    fontFamily: Font.REGULAR,
    fontSize: FontSize.INFO,
  },
  radioButton: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
  },
});

export default Factor;
