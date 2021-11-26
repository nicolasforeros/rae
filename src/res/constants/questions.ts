import { IFactor, IQuestion } from '../../common/types/types';

const question1: IQuestion = {
  description: '¿El tratamiento tiene una duración de dos o mas años?',
  weight: 1.6,
  isYes: undefined,
};

const question2: IQuestion = {
  description:
    '¿El tratamiento de ortodoncia requiere exodoncias en algún momento?',
  weight: 0.4,
  isYes: undefined,
};

const question3: IQuestion = {
  description: '¿El paciente presenta raíces cortas?',
  weight: 3.3,
  isYes: undefined,
};

const question4: IQuestion = {
  description: '¿El paciente presenta raíces delgadas?',
  weight: 4.7,
  isYes: undefined,
};

const factor1: IFactor = {
  name: 'Mordida abierta anterior',
  isYes: undefined,
};
const factor2: IFactor = {
  name: 'Expansión hyrax',
  isYes: undefined,
};
const factor3: IFactor = {
  name: 'Raíz dilacerada',
  isYes: undefined,
};
const factor4: IFactor = {
  name: 'Ápice cónico',
  isYes: undefined,
};
const factor5: IFactor = {
  name: 'Técnica meaw',
  isYes: undefined,
};
const factor6: IFactor = {
  name: 'Retracción en masa',
  isYes: undefined,
};
const factor7: IFactor = {
  name: 'Fuerzas intrusivas',
  isYes: undefined,
};
const factor8: IFactor = {
  name: 'Fuerzas excesivas',
  isYes: undefined,
};

const factor9: IFactor = {
  name: 'Paciente mayor de 40 años',
  isYes: undefined,
};

const factor10: IFactor = {
  name: 'Antecedentes de traumas dentoalveolar',
  isYes: undefined,
};

export const initialQuestions = [question1, question2, question3, question4];
export const initialFactors = [
  factor1,
  factor2,
  factor3,
  factor4,
  factor5,
  factor6,
  factor7,
  factor8,
  factor9,
  factor10,
];
