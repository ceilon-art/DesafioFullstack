import styled from 'styled-components';

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


export const LoginSession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 200px;
  animation: loadAnimation;
  animation-duration: 400ms;
  text-align: center;
`;

export const Input = styled.input`
  background: #ebeaed 0% 0% no-repeat padding-box;
  color: black;
  border: none;
  padding: 10px 15px;
  width: 700px;
  height: 40px;
  border-radius: 5px;
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

export const LoginButton = styled.button`
  background-color: #2F55CC;
  color: white;
  font-weight: bold;
  border: none;
  margin: 15px 0;
  width: 180px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;

  cursor: pointer;
  transition: background-color .3s;

  &:hover, &:focus {
    background-color: #365DF0;
  }
`;

export const CreateAccount = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
  cursor: pointer;

  transition: color .3s;

  &:hover {
    color: #778899;
  }
`;