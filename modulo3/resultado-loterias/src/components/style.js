import styled from 'styled-components';
export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
`;
export const Select = styled.select`
  font-size: 20px;
  width: 250px;
  height: 40px;
  border: none;
  position: absolute;
  top: 40px;
  padding-left: 33px;
  padding-right: 22px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  border-radius: 12px;
  @media (min-width: 912px) {
    position: absolute;
    top: 90px;
    left: 90px;
    width: 250px;
    height: 45px;
    z-index: 10;
  }
`;
export const Nome = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  font-size: 30px;
  @media (min-width: 912px) {
    z-index: 10;
    margin: 25px;
  }
`;
export const Concurso = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: white;
  position: absolute;
  top: 300px;
  z-index: 1000;
  @media (min-width: 912px) {
    display: none;
  }
`;

export const NomeConcurso = styled.h6`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

export const IdConcurso = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-top: 15px;
`;

export const ConcursoDesk = styled.div`
  position: absolute;
  top: 80%;
  left: 5%;
  color: white;
  padding: 0;
  @media (max-width: 912px) {
    display: none;
  }
`;
export const TextAndLogoDiv = styled.div`
  position: absolute;
  top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 912px) {
    flex-direction: row;
    top: 47%;
    left: 5%;
  }
`;
export const ContainerSorteio = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 40px;
  gap: 20px;
  justify-content: center;
  color: black;
  margin: 0px 40px;
  @media (min-width: 912px) {
    margin-right: 100px;
  }
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
    @media (min-width: 912px) {
      width: 75px;
      height: 75px;
    }
  }
`;
export const ContainerCentral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8e8;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  @media (min-width: 912px) {
    flex-direction: row;
    overflow: hidden;
  }
`;
