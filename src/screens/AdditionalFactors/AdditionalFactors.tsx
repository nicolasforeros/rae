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
import { initialFactors } from '../../res/constants/questions';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Factor from './Factor';
import { StateContext } from '../../provider/provider';
import { useSendData } from '../Test/useSendData';
import { IPatient, IUser } from '../../common/types/types';

const arrayResults = [55, 65, 77, 86, 98];

const AdditionalFactors = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'AdditionalFactors'>) => {
  const { user, patient } = useContext(StateContext);

  const [factors, setFactors] = useState(initialFactors);

  const { mutate: sendData } = useSendData({
    app: 'caries',
    user: user || ({} as IUser),
    patient: patient || ({} as IPatient),
    answers: {
      questions: route.params?.questions || [],
      additionalFactors: factors,
    },
  });

  const onHandleChange = (id: number, value: string) => {
    const newQuestions = [...factors];
    const answer = {
      ...newQuestions[id],
      isYes: value === 'yes',
    };
    newQuestions[id] = answer;

    setFactors(newQuestions);
  };

  const hasAllQuestionsAnswer = () => {
    for (let index = 0; index < factors.length; index++) {
      const question = factors[index];

      if (question.isYes === undefined) {
        return false;
      }
    }

    return true;
  };

  const onPressResults = () => {
    const filterQuestions = route.params?.questions.filter(
      (question) => question.isYes
    );

    let sum = -4.5;
    filterQuestions?.forEach((question) => (sum += question.weight));

    sum = Math.exp(sum);
    sum = (sum / (1 + sum)) * 100;

    let i = 0;
    for (i = 0; i < arrayResults.length; i++) {
      const element = arrayResults[i];

      if (sum < element) {
        break;
      }
    }

    sendData();

    navigation.navigate('Results', {
      questionPosition: i,
      factorPosition: factors.filter((question) => question.isYes).length || 1,
    });
  };

  const handleOnPressReferences = () => {
    navigation.navigate('References');
  };

  return (
    <ImageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Factores Adicionales</Text>
          <View style={styles.questions}>
            {factors.map((factor, index) => (
              <Factor
                key={index}
                id={index}
                factor={factor}
                onHandleChange={onHandleChange}
              />
            ))}
          </View>
          <ButtonPrimary
            text="Evaluar"
            onPress={onPressResults}
            disabled={!hasAllQuestionsAnswer()}
          />
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleOnPressReferences}>
              <Text style={styles.footerText}>
                Consulte aquí las referencias
              </Text>
            </TouchableOpacity>
          </View>
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
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  footerText: {
    color: Color.SECONDARY,
    fontFamily: Font.REGULAR,
    textDecorationLine: 'underline',
  },
});

export default AdditionalFactors;
