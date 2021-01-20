import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  hover?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, hover, type }) => {
  return (
    <Container color={color} hover={hover} type={type}>
      {children}
    </Container>
  );
};

export default Button;
