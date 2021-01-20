import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const Header = styled.div`
  animation: loadAnimation;
  animation-duration: 400ms;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 4px;
    cursor: pointer;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
`;

export const CreateAccountButton = styled.button`
  color: black;
  border-radius: 5px;
  font-weight: bold;
  width: 174px;
  border: none;  
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 7px;
  text-align: center;
  font-size: 22px;
  cursor: pointer;
  
  transition: background-color .3s;

  &:hover {
    background-color:	#CDC9C9;
  }
`;