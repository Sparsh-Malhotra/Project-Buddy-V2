export interface IOnboardingData {
  firstName?: string;
  lastName?: string;
  age?: string;
  gender?: "male" | "female" | 'none';
  university?: string;
  course?: string;
  state?: string;
  techStack?: string;
  skills?: string[];
  linkedin?: string;
  github?: string;
  dribble?: string;
  twitter?: string;
  type?: "student" | "professional";
  about?: string;
}
