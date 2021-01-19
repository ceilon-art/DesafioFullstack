import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
  }
`;

export const LoginSession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin: 15px;
    color: blue;
    cursor: pointer;
  }

  hr {
    margin: 15px;
    width: 250px;
    background-color: #D3D3D3;
  }
`;

export const Input = styled.input`
  background-color: #F5F5F5;
  color: black;
  border: none;
  margin: 10px;
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

export const LoginButton = styled.button`
  background-color: #1E90FF;
  color: white;
  font-weight: bold;
  border: none;
  margin: 10px;
  width: 180px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;

  cursor: pointer;
  transition: background-color .3s;

  &:hover, &:focus {
    background-color: #87CEEB;
  }
`;

export const NewAccount = styled.button`
  background-color: #42b72a;
  color: white;
  font-weight: bold;
  border: none;
  margin: 10px;
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