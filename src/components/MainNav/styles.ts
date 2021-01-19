import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 4px;
  }
`;

export const HomeLink = styled.a`
  font-size: 46px;
  font-weight: bold;
  color: blue;

  transition: color .3s;

  &:hover {
    color: #00BFFF;
  }
`;

export const ProfileButton = styled.button`
  background-color: blue;
  width: 120px;
  height: 40px;
  border: none;
  margin: 10px;
  padding: 5px; 
  border-radius: 4px;
  cursor: pointer;
  
  transition: background-color .3s;
  &:hover {
    background-color: #00BFFF;
  }
`;

export const ProfileLink = styled.a`
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;