import { IQuestion } from "../common/types/types";

export type RootStackParamList = {
  Register: undefined
  About: undefined
  PrivacyPolicies: undefined
  NewPatient: undefined
  RegisterPatient: undefined
  Test: undefined
  AdditionalFactors: {questions: IQuestion[]} | undefined
  Results: {questionPosition: number, factorPosition: number} | undefined
  References: undefined
}
