import { ContainerSorteio } from './style';
export function Sorteio(props) {
  return (
    <>
      <ContainerSorteio>
        <p> {props.numbers} </p>
      </ContainerSorteio>
    </>
  );
}
