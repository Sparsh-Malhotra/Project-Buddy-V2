export interface IText extends React.PropsWithChildren {
  className?: string;
}

export const RegularText = ({ className, children }: IText) => (
  <p className={className}>{children}</p>
);

export const MediumText = ({ className, children }: IText) => (
  <p className={`font-medium ${className}`}>{children}</p>
);

export const BoldText = ({ className, children }: IText) => (
  <p className={`font-bold ${className}`}>{children}</p>
);
