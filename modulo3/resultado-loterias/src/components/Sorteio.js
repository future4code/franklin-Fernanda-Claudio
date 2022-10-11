import { Balaozin, ContainerSorteio } from './style';
export function Sorteio(props) {
  return (
    <>
      <ContainerSorteio>
        {props.numbers &&
          props.numbers.map((number) => (
            <>
              <p>{number}</p>
            </>
          ))}
      </ContainerSorteio>
    </>
  );
}
