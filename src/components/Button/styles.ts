import styled from 'styled-components';
import { ButtonProps } from './index';

export const Container = styled.div<ButtonProps>`
  background: ${(props): string => props.color || '#4c4499'} 0% 0% no-repeat padding-box;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  width: 174px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 22px;
  margin-left: 7px;
  text-align: center;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(props): string => props.hover || '#6554c0'};
  }
`;
