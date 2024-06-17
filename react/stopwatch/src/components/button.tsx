import styled from "@emotion/styled";

type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => props.primary && props.theme.colors.primary};
  cursor: pointer;
  border: "1px solid " +
    ${(props) => (props.primary ? props.theme.colors.primary : "#dadce0")};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
