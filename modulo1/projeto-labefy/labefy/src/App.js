import './App.css';
import Menu from './components/Menu';
import styled from 'styled-components';
import { Cabecalho } from './components/Cabecalho';
const Container = styled.div`
  background-color: #f6f6f9;
  min-height: 90vh;
`;
function App() {
  return (
    <div>
      <Cabecalho />
      <Container>
        <Menu />
      </Container>
    </div>
  );
}

export default App;
