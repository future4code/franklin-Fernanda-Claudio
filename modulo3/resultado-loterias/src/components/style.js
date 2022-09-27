import styled from 'styled-components';

export const Container = styled.div`
  border-top-right-radius: 90px;
  border-bottom-right-radius: 90px;
  background: ${(props) => props.color};
  height: 100vh;
  width: 55%;
  margin: 0px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerSorteio = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8e8;
  color: black;
  height: 100vh;
  width: 100%;
  margin: 0px;
  p {
    font-weight: bold;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 90px;
    height: 90px;
    border-radius: 50px;
  }
`;
export const ContainerCentral = styled.div`
  background-color: #e8e8e8;
  display: flex;
`;
