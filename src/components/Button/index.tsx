import React from 'react';

import { Container } from './styles';

export interface ButtonProps {
  color?: string;
  hover?: string;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, hover, type }) => {
  return (
    <Container color={color} hover={hover} type={type}>
      {children}
    </Container>
  );
};

export default Button;
