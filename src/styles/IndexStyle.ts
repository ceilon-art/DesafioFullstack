import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 500;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 14px;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 46px;
  }
`;

export const FirstParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  img {
    margin: 15px;
    width: 550px;
    height: 300px;
  }

  h1 {
    color: black;
  }
`;

export const CommonParagraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  img {
    margin: 15px;
    width: 550px;
    height: 300px;
  }
  
  p {
    font-size: 26px;
  }
`;