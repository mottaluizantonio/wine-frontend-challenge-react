import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  height?: string;
  fontSize?: string;
  uppercase?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.greenButton};
  font-weight: 700;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  width: ${prop => (prop?.width ? prop.width : '180px')};
  height: ${prop => (prop?.height ? prop.height : '50px')};
  font-size: ${prop => (prop?.fontSize ? prop.fontSize : '16px')};
  text-transform: ${prop => (prop?.uppercase ? 'uppercase' : 'capitalize')};
`;

export const Container = styled.div`
  display: flex;
`;
