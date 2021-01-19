import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
  }
`;

export const Formulary = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(Field)`
  background-color: #F5F5F5;
  color: black;
  border: none;
  margin: 15px 0;
  padding: 7px; 
  width: 250px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;

  ::placeholder {
    color: #778899;
  }

  cursor: pointer;

  &:focus {
    border: 1px solid #4F4F4F;
  }
`;

export const SubmitButton = styled.button`
  background-color: #42b72a;
  color: white;
  font-weight: bold;
  border: none;
  margin: 20px;
  padding: 7px; 
  width: 180px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;

  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    background-color: #00FF7F;
  }
`;

