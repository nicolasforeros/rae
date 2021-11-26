import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageLayout from '../../common/layouts/ImageLayout';
import { RootStackParamList } from '../../navigation/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';
import StarIcon from '../../res/assets/icons/star.svg';
import Question1Icon from '../../res/assets/icons/question4.svg';

const { height, width } = Dimensions.get('window');

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const Results = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Results'>) => {
  const handleOnPress = () => {
    navigation.navigate('RegisterPatient');
  };

  return (
    <ImageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Probabilidades según gráfica secuencial
          </Text>
          <View style={styles.grid}>
            {[...Array(10)].map((factor, index) => (
              <View key={index} style={styles.row}>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: `rgba(${23 + index * 20}, ${
                        106 + index * 20
                      }, ${88 + index * 20}, 1)`,
                    },
                  ]}
                >
                  {route.params?.questionPosition == 0 &&
                    route.params.factorPosition == 10 - index && (
                      <Question1Icon style={{backgroundColor: 'white', borderRadius: 0}}/>
                    )}
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: `rgba(${129 + index * 20}, ${
                        109 + index * 20
                      }, ${20 + index * 20}, 1)`,
                    },
                  ]}
                >
                  {route.params?.questionPosition == 1 &&
                    route.params.factorPosition == 10 - index && (
                      <Question1Icon style={{backgroundColor: 'white', borderRadius: 0}}/>
                    )}
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: `rgba(${124 + index * 20}, ${
                        76 + index * 20
                      }, ${29 + index * 20}, 1)`,
                    },
                  ]}
                >
                  {route.params?.questionPosition == 2 &&
                    route.params.factorPosition == 10 - index && (
                      <Question1Icon style={{backgroundColor: 'white', borderRadius: 0}}/>
                    )}
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: `rgba(${125 + index * 20}, ${
                        51 + index * 20
                      }, ${42 + index * 20}, 1)`,
                    },
                  ]}
                >
                  {route.params?.questionPosition == 3 &&
                    route.params.factorPosition == 10 - index && (
                      <Question1Icon style={{backgroundColor: 'white', borderRadius: 0}}/>
                    )}
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: `rgba(${106 + index * 20}, ${
                        41 + index * 20
                      }, ${34 + index * 20}, 1)`,
                    },
                  ]}
                >
                  {route.params?.questionPosition == 4 &&
                    route.params.factorPosition == 10 - index && (
                      <Question1Icon style={{backgroundColor: 'white', borderRadius: 0}}/>
                    )}
                </View>
              </View>
            ))}

            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.percentage}>Probabilidad normal</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.percentage}>Probabilidad Considerable</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.percentage}>Muy Considerable</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.percentage}>Alta Considerable</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.percentage}>Muy Alto</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleOnPress}>
            <Image
              style={styles.image}
              source={require('../../res/assets/images/nuevoPaciente.png')}
            />
            <Text style={styles.footerText}>Nuevo Paciente</Text>
          </TouchableOpacity>
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
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '97%',
  },
  title: {
    marginTop: 35,
    marginBottom: 25,
    color: Color.PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    height: 34,
    marginHorizontal: 1.5,
    marginVertical: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questions: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  finalResult: {
    position: 'absolute',
    fontFamily: Font.BOLD,
    fontSize: 40,
  },
  sum: {
    backgroundColor: Color.TEXT_SECONDARY,
    borderRadius: 100,
    height: 175,
    width: 175,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sumText: {
    fontFamily: Font.BOLD,
    fontSize: FontSize.TOTAL,
    color: Color.TEXT_PRIMARY,
    lineHeight: 60,
  },
  totalText: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
    color: Color.TEXT_PRIMARY,
  },
  answersGroup: {
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    width: '70%',
  },
  answer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  answersText: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
    color: Color.TEXT_QUESTION,
  },
  number: {
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: 'center',
    marginRight: 8,
  },
  numberText: {
    fontFamily: Font.BOLD,
    fontSize: FontSize.INFO,
    color: Color.TEXT_SECONDARY,
    padding: 8,
    textAlign: 'center',
  },
  percentage: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.PERCENTAGE,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: height * 0.05,
    marginTop: 30,
    marginBottom: 10,
  },
  footerText: {
    textAlign: 'center',
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.ANSWER,
  },
});

export default Results;
