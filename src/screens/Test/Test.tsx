import React, { useContext, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonPrimary from '../../common/components/ButtonPrimary/ButtonPrimary';
import ImageLayout from '../../common/layouts/ImageLayout';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';
import Question from './Question';
import Question1Icon from '../../res/assets/icons/question1.svg';
import Question2Icon from '../../res/assets/icons/question2.svg';
import Question3Icon from '../../res/assets/icons/question3.svg';
import Question4Icon from '../../res/assets/icons/question4.svg';
import { initialQuestions } from '../../res/constants/questions';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { StateContext } from '../../provider/provider';
import { IPatient, IUser } from '../../common/types/types';
import { useSendData } from './useSendData';

const icons = [
  Question1Icon,
  Question2Icon,
  Question3Icon,
  Question4Icon,
];

const Test = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Test'>) => {

  const [questions, setQuestions] = useState(initialQuestions);

  const onHandleChange = (id: number, value: string) => {
    const newQuestions = [...questions];
    const answer = {
      ...newQuestions[id],
      isYes: value === 'yes',
    };
    newQuestions[id] = answer;

    setQuestions(newQuestions);
  };

  const hasAllQuestionsAnswer = () => {
    for (let index = 0; index < questions.length; index++) {
      const question = questions[index];

      if (question.isYes === undefined) {
        return false;
      }
    }

    return true;
  };

  const onPressResults = () => {
    navigation.navigate('AdditionalFactors', { questions });
  };

  const handleOnPressReferences = () => {
    navigation.navigate('References');
  };

  return (
    <ImageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Modelo predictivo de factores de riesgo de reabsorción radicular
            externa pos-ortodoncia
          </Text>
          <Text style={styles.subtitle}>
            Factores
          </Text>
          <View style={styles.questions}>
            {questions.map((question, index) => (
              <Question
                key={index}
                id={index}
                question={question}
                Icon={icons[index]}
                onHandleChange={onHandleChange}
              />
            ))}
          </View>
          <ButtonPrimary
            text="Continuar"
            onPress={onPressResults}
            disabled={!hasAllQuestionsAnswer()}
          />
        </View>
      </ScrollView>
    </ImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    marginBottom: 34,
    color: Color.PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 15,
    color: Color.SECONDARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.ABOUT,
    width: '100%',
    marginLeft: 50,
  },
  questions: {
    width: '100%',
  },
});

export default Test;
