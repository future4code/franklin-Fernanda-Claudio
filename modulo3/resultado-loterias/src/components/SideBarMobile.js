import styled from 'styled-components';
const StyledHeader = styled.div`
  position: relative;
  top: -50px;
  @media (min-width: 912px) {
    display: none;
    z-index: 0;
  }
`;

export const SideBarMobile = (props) => {
  return (
    <StyledHeader>
      <svg
        width="912"
        height="570"
        viewBox="0 0 524 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M871.477 569.828C871.477 569.828 306.227 281.609 -347 569.828V-132L871.477 -132V569.828Z"
          fill={props.color}
        />
      </svg>
    </StyledHeader>
  );
};
