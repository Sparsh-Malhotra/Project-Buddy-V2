import Balancer from 'react-wrap-balancer'

export interface IText extends React.PropsWithChildren {
  className?: string
}

export const RegularText = ({ className, children }: IText) => (
  <p className={className}>
    <Balancer>{children}</Balancer>
  </p>
)

export const MediumText = ({ className, children }: IText) => (
  <p className={`font-medium ${className}`}>
    <Balancer>{children}</Balancer>
  </p>
)

export const BoldText = ({ className, children }: IText) => (
  <p className={`font-bold ${className}`}>
    <Balancer>{children}</Balancer>
  </p>
)
