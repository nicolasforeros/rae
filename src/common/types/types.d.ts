export interface IQuestion {
  description: string;
  weight: number;
  isYes: boolean | undefined;
}

export interface IFactor {
  name: string;
  isYes: boolean | undefined;
}

export interface IUser {
  email: string;
  fullName: string;
  occupation: string;
}

export interface IPatient {
  age: number;
  sex: 'masculino' | 'femenino';
}
