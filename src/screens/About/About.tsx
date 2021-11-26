import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonPrimary from '../../common/components/ButtonPrimary/ButtonPrimary';
import SimpleLayout from '../../common/layouts/SimpleLayout';
import { RootStackParamList } from '../../navigation/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';

const About = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'About'>) => {
  const handleOnBack = () => {
    navigation.goBack();
  };

  return (
    <SimpleLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../res/assets/images/logo.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Acerca de (v 2.1.1.)</Text>
          <View style={styles.useTerms}>
            <Text style={styles.useTermsText}>
              La app de Reabsorción Radicular pos Ortodoncia, basada en un
              proceso investigativo y en la evidencia científica, es una
              aplicación que tiene como propósito ayudar al ortodoncista a
              determinar la probabilidad de riesgo de reabsorción radicular pos
              ortodoncia que tiene un paciente. El concepto clínico final al
              respecto, será siempre del profesional.{'\n\n'}La app se
              fundamentó en una investigación realizada en la Universidad
              Autónoma de Manizales titulada:{' '}
              <Text style={styles.referenceText}>
                Modelo predictivo de factores de riesgo para la reabsorción
                radicular pos-ortodoncia.{' '}
              </Text>
              Autores: Ramiro Mejía Sanín, Olga Patricia López Soto, Nathalia
              Molina Bastidas, David González Guerrero, Sebastián Buitrago
              Marín. Repositorio de Investigación. Universidad Autónoma de
              Manizales.2018:{'\n\n'}
              Autores académicos:{'\n'}Ramiro Mejía Sanín, Olga Patricia López
              Soto, Nathalia Molina Bastidas, David González Guerrero, Sebastián
              Buitrago Marín, Eola de la Rosa Marrugo.{'\n\n'}Grupo de
              ingeniería:{'\n'}
              Ingeniero de Sistemas Carlos Andres Zapata Ospina y Joven
              Investigador Nicolas Forero Segovia
            </Text>
          </View>
          <ButtonPrimary text="Regresar" onPress={handleOnBack} />
        </View>
      </ScrollView>
    </SimpleLayout>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height * 0.13,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
  useTerms: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '95%',
  },
  useTermsText: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
  },
  referenceText: {
    fontFamily: Font.BOLD,
  },
  privacyPolicies: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
    textDecorationLine: 'underline',
  },
});

export default About;
