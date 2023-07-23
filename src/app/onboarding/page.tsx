"use client";

import { useState } from "react";
import Step1form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import { IOnboardingData } from "@/models";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [onboardingData, setOnboardingData] = useState<IOnboardingData>({
    firstName: "",
    lastName: "",
    age: "",
    gender: undefined,
    university: "",
    course: "",
    state: undefined,
    techStack: undefined,
    skills: [],
    linkedin: "",
    github: "",
    dribble: "",
    twitter: "",
    type: undefined,
    about: "",
  });

  const handleSubmit = (values: IOnboardingData) => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      setOnboardingData((prev) => ({ ...prev, ...values }));
    }
    const body = { ...onboardingData, ...values };
  };

  return (
    <>
      <p>// Stepper Component Here</p>
      {currentStep === 1 && <Step1form onSubmit={handleSubmit} />}
      {currentStep === 2 && <Step2Form onSubmit={handleSubmit} />}
      {currentStep === 3 && <Step3Form onSubmit={handleSubmit} />}
    </>
  );
}
