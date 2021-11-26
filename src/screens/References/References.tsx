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

const References = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'References'>) => {
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
          <Text style={styles.title}>Referencias</Text>
          <View style={styles.useTerms}>
            <Text style={styles.useTermsText}>
              [1] Pereira SA, Lopez M, Lavado N, et al. A clinical risk
              predictionmodel of orthodontic induced externalk apical root
              resorption. Rev Port Estomatol Cir Maxilofac. 2014;55:66-72
              {'\n\n'}[2] Nanekrungsan K, Patanaporn V, Janhom A, Korwanich N.
              External apical root resorption in maxillary incisors in
              orthodontic patients: associated factors and radiographic
              evaluation. Imaging Sci Dent. 2012 Sep;42(3):147-54. doi:
              10.5624/isd.2012.42.3.147. Epub 2012 Sep 21. PMID: 23071964;
              PMCID: PMC3465756.{'\n\n'}[3] Márquez JF, Castaño JM, Rueda ZV,
              Rendón J. Diagnóstico de reabsorción radicular externa en
              ortodoncia. Una revisión sistemática. Revista Nacional de
              Odontología. 2012; 8(14): 62-75.{'\n\n'}
              [4] Weltman B, Vig KW, Fields HW, Shanker S, Kaizar EE. Root
              resorption associated with orthodontic tooth movement: a
              systematic review. Am J Orthod Dentofacial Orthop. 2010
              Apr;137(4):462-76; discussion 12A. doi:
              10.1016/j.ajodo.2009.06.021. PMID: 20362905.{'\n\n'}[5] Roscoe MG,
              Meira JB, Cattaneo PM. Association of orthodontic force system and
              root resorption: A systematic review. Am J Orthod Dentofacial
              Orthop. 2015 May;147(5):610-26. doi: 10.1016/j.ajodo.2014.12.026.
              PMID: 25919107.
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
    textAlign: 'center',
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
  moreInfo: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    textDecorationLine: 'underline',
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

export default References;
