import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const GoBack = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  img {
    width: 25px;
  }
`;

export const Formulary = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 200px;
  animation: loadAnimation;
  animation-duration: 400ms;
`;

export const Input = styled(Field)`
  background: #ebeaed 0% 0% no-repeat padding-box;
  color: black;
  border: none;
  margin: 15px 0;
  padding: 7px; 
  width: 700px;
  height: 40px;
  border-radius: 6px;
  font-size: 16px;
  cursor: text;

  ::placeholder {
    color: #778899;
    margin-top: 6px
  }

  &:focus {
    border: 1px solid #dedce1;
  }
`;

export const SubmitButton = styled.button`
  background-color: #10B26C;
  color: white;
  font-weight: bold;
  border: none;
  margin: 20px;
  padding: 7px; 
  width: 174px;
  height: 40px;
  border-radius: 6px;
  font-size: 16px;

  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    background-color: #12DB89;
  }
`;

export const Login = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
  cursor: pointer;

  transition: color .3s;

  &:hover {
    color: #778899;
  }
`;

