'use client'

import { useState } from 'react'
import { Step, StepConfig, Steps } from '@/components/ui/stepper'
import Step1Form from './Step1Form'
import Step2Form from './Step2Form'
import Step3Form from './Step3Form'
import { IOnboardingData } from '@/models'
import { useStepper } from '@/hooks'

const steps = [
  { label: 'Personal Details' },
  { label: 'Social Details' },
  { label: 'About me' },
] satisfies StepConfig[]

export default function Onboarding() {
  const [onboardingData, setOnboardingData] = useState<IOnboardingData>({
    firstName: '',
    lastName: '',
    age: '',
    gender: undefined,
    university: '',
    course: '',
    state: undefined,
    techStack: undefined,
    skills: [],
    linkedin: '',
    github: '',
    dribble: '',
    twitter: '',
    type: undefined,
    about: '',
  })

  const { nextStep, setStep, activeStep, isLastStep } = useStepper({
    initialStep: 0,
    steps,
  })

  const renderForm = (index: number) => {
    switch (index) {
      case 0:
        return <Step1Form onSubmit={handleSubmit} />
      case 1:
        return <Step2Form onSubmit={handleSubmit} />
      case 2:
        return <Step3Form onSubmit={handleSubmit} />
    }
  }

  const handleStepClick = (step: number) => {
    if (step >= activeStep) return null
    else setStep(step)
  }

  const handleSubmit = (values: IOnboardingData) => {
    if (!isLastStep) {
      nextStep()
      setOnboardingData((prev) => ({ ...prev, ...values }))
    }
    const body = { ...onboardingData, ...values }
    console.log(body)
  }

  return (
    <div className="mt-4 w-full">
      <Steps activeStep={activeStep} onClickStep={handleStepClick}>
        {steps.map((step, index) => (
          <Step index={index} key={index} {...step}>
            {renderForm(index)}
          </Step>
        ))}
      </Steps>
    </div>
  )
}
