export type SelectOption<T> = {
  label: string;
  value: T;
};

export const TechStackOptions: SelectOption<string>[] = [
  {
    label: "UI/UX",
    value: "ui",
  },
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
  {
    label: "Machine Learning",
    value: "ml",
  },
  {
    label: "Blockchain",
    value: "blockchain",
  },
  {
    label: "FullStack",
    value: "fullstack",
  },
  {
    label: "AR/VR",
    value: "arvr",
  },
  {
    label: "Android/IOS",
    value: "mobile",
  },
];

export const SkillOptions: SelectOption<string>[] = [
  {
    label: "C",
    value: "C",
  },
  {
    label: "C++",
    value: "C++",
  },
  {
    label: "C#",
    value: "C#",
  },
];

export const CategoriesOptions: SelectOption<string>[] = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "professional",
    label: "Professional",
  },
];
